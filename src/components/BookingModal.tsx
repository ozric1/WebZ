import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  MessageCircle,
  Mail,
  Video
} from 'lucide-react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  isBefore, 
  startOfToday, 
  getDay, 
  setHours, 
  setMinutes, 
  isEqual 
} from 'date-fns';
import { fr, enUS, arSA } from 'date-fns/locale';
import { useLanguage } from '../LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [preferredChannel, setPreferredChannel] = useState<'whatsapp' | 'email'>('whatsapp');

  const locale = useMemo(() => {
    switch (language) {
      case 'fr': return fr;
      case 'ar': return arSA;
      default: return enUS;
    }
  }, [language]);

  // Allowed days: Monday (1) to Saturday (6)
  const isDayAllowed = (date: Date) => {
    const day = getDay(date);
    return [1, 2, 3, 4, 5, 6].includes(day);
  };

  const isDateDisabled = (date: Date) => {
    return isBefore(date, startOfToday()) || !isDayAllowed(date);
  };

  const timeSlots = useMemo(() => {
    const slots = [];
    // 09:30 AM to 18:00 (6:00 PM)
    let current = setMinutes(setHours(new Date(), 9), 30);
    const end = setHours(new Date(), 18);

    while (isBefore(current, end) || isEqual(current, end)) {
      slots.push(format(current, 'HH:mm'));
      const nextMinutes = current.getMinutes() + 30;
      if (nextMinutes >= 60) {
        current = setHours(current, current.getHours() + 1);
        current = setMinutes(current, nextMinutes - 60);
      } else {
        current = setMinutes(current, nextMinutes);
      }
    }
    return slots;
  }, []);

  const calendarDays = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;

    const dateStr = format(selectedDate, 'dd/MM/yyyy');
    
    if (preferredChannel === 'whatsapp') {
      const message = language === 'fr' 
        ? `Bonjour Nezar ! Je souhaite réserver une consultation stratégique gratuite avec webZ pour le ${dateStr} à ${selectedTime}. Mon projet concerne : `
        : language === 'ar'
        ? `مرحباً نزار! أود حجز استشارة مجانية مع webZ يوم ${dateStr} في تمام الساعة ${selectedTime}. مشروعي يتعلق بـ: `
        : `Hi Nezar! I would like to book a free strategy call with webZ on ${dateStr} at ${selectedTime}. My project is about: `;
      
      const whatsappUrl = `https://wa.me/212634175357?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } else {
      const subject = encodeURIComponent(
        language === 'fr' ? `Réservation consultation webZ - ${dateStr} à ${selectedTime}`
        : language === 'ar' ? `طلب حجز استشارة webZ - ${dateStr}`
        : `webZ Strategy Call Booking - ${dateStr} at ${selectedTime}`
      );
      const body = encodeURIComponent(
        language === 'fr' 
          ? `Bonjour Nezar,\n\nJe souhaite réserver un appel stratégique de 30 minutes avec webZ.\nDate souhaitée : ${dateStr} à ${selectedTime}\n\nNom / Entreprise :\nLien de notre site actuel (si existant) :\nObjectif principal :\n\nMerci !`
          : `Hi Nezar,\n\nI would like to book a 30-minute strategy call with webZ.\nRequested slot: ${dateStr} at ${selectedTime}\n\nName / Company:\nCurrent website (if any):\nMain goal:\n\nThank you!`
      );
      window.location.href = `mailto:abdelnezar7@gmail.com?subject=${subject}&body=${body}`;
    }
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#090d14] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 my-auto"
          >
            {/* Left Side: Calendar */}
            <div className="flex-1 p-5 sm:p-6 border-b md:border-b-0 md:border-r border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    {language === 'fr' ? 'Échange 30 min offert' : language === 'ar' ? 'استشارة مجانية 30 دقيقة' : 'Free 30-min Strategy Call'}
                  </span>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 mt-0.5">
                    <CalendarIcon className="w-5 h-5 text-emerald-400" />
                    {format(currentMonth, 'MMMM yyyy', { locale })}
                  </h3>
                </div>
                <div className="flex gap-1.5">
                  <button 
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white"
                    aria-label="Next month"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                  <div key={i} className="text-center text-xs font-semibold text-zinc-500 py-1.5">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, i) => {
                  const disabled = isDateDisabled(day);
                  const isSelected = selectedDate && isSameDay(day, selectedDate);
                  const isCurrentMonth = isSameMonth(day, currentMonth);

                  return (
                    <button
                      key={i}
                      disabled={disabled}
                      onClick={() => {
                        setSelectedDate(day);
                        setSelectedTime(null);
                      }}
                      className={`
                        aspect-square flex items-center justify-center rounded-xl text-sm font-medium transition-all relative
                        ${!isCurrentMonth ? 'opacity-20' : ''}
                        ${isSelected ? 'bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-600/30' : ''}
                        ${!isSelected && !disabled ? 'hover:bg-white/10 text-zinc-200' : ''}
                        ${disabled ? 'text-zinc-700 cursor-not-allowed' : 'cursor-pointer'}
                      `}
                    >
                      {format(day, 'd')}
                      {isSelected && (
                        <motion.div 
                          layoutId="activeDay"
                          className="absolute inset-0 border-2 border-emerald-400 rounded-xl"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-400 pt-3 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {language === 'fr' ? 'Lun - Sam disponible' : 'Mon - Sat available'}
                </span>
                <span className="text-zinc-500">
                  {language === 'fr' ? 'Sans engagement' : 'No obligation'}
                </span>
              </div>

              {/* Direct Quick Contact alternatives */}
              <div className="mt-4 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-xs text-zinc-400 mb-2 font-medium">
                  {language === 'fr' ? 'Ou contactez directement le fondateur :' : 'Or reach the founder directly:'}
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://wa.me/212634175357"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:abdelnezar7@gmail.com?subject=Demande de projet webZ"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 text-xs font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Time Slots & Channel Choice */}
            <div className="w-full md:w-72 p-5 sm:p-6 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  {language === 'fr' ? 'Créneau horaire' : language === 'ar' ? 'اختر الوقت' : 'Select Time'}
                </h3>

                <div className="overflow-y-auto max-h-[200px] sm:max-h-[220px] pr-1 space-y-1.5 custom-scrollbar">
                  {!selectedDate ? (
                    <div className="h-32 flex flex-col items-center justify-center text-center text-zinc-500">
                      <CalendarIcon className="w-7 h-7 mb-2 opacity-30 text-zinc-400" />
                      <p className="text-xs">
                        {language === 'fr' ? 'Sélectionnez d\'abord une date' : 'Pick a date on the left'}
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-1.5">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`
                            py-2 px-2.5 rounded-xl text-xs font-semibold transition-all border
                            ${selectedTime === time 
                              ? 'bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-600/30' 
                              : 'bg-white/5 border-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10'}
                          `}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Channel Selector */}
                {selectedDate && selectedTime && (
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <span className="text-[11px] font-semibold text-zinc-400 block mb-2">
                      {language === 'fr' ? 'Confirmer via :' : 'Confirm via:'}
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPreferredChannel('whatsapp')}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all border ${
                          preferredChannel === 'whatsapp'
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm'
                            : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreferredChannel('email')}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all border ${
                          preferredChannel === 'email'
                            ? 'bg-blue-500/20 border-blue-500 text-blue-300 shadow-sm'
                            : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Email
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5">
                <button
                  disabled={!selectedDate || !selectedTime}
                  onClick={handleConfirm}
                  className={`
                    w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all
                    ${selectedDate && selectedTime 
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20 active:scale-[0.98]' 
                      : 'bg-white/10 text-white/30 cursor-not-allowed'}
                  `}
                >
                  <Check className="w-4 h-4" />
                  {language === 'fr' ? 'Confirmer le rendez-vous' : language === 'ar' ? 'تأكيد الموعد' : 'Confirm Appointment'}
                </button>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
