import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, Check, ChevronLeft, ChevronRight } from 'lucide-react';
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
  addDays, 
  isBefore, 
  startOfToday,
  getDay,
  setHours,
  setMinutes,
  isAfter,
  isEqual
} from 'date-fns';
import { fr, enUS, arSA } from 'date-fns/locale';
import { useLanguage } from '../LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const locale = useMemo(() => {
    switch (language) {
      case 'fr': return fr;
      case 'ar': return arSA;
      default: return enUS;
    }
  }, [language]);

  // Allowed days: Monday (1), Tuesday (2), Thursday (4)
  const isDayAllowed = (date: Date) => {
    const day = getDay(date);
    return [1, 2, 4].includes(day);
  };

  const isDateDisabled = (date: Date) => {
    return isBefore(date, startOfToday()) || !isDayAllowed(date);
  };

  const timeSlots = useMemo(() => {
    const slots = [];
    let current = setMinutes(setHours(new Date(), 12), 30); // 12:30 PM
    const end = setHours(new Date(), 16); // 4:00 PM

    while (isBefore(current, end) || isEqual(current, end)) {
      slots.push(format(current, 'HH:mm'));
      current = addDays(current, 0); // Just to keep the loop going
      // Increment by 30 mins
      const nextMinutes = current.getMinutes() + 30;
      if (nextMinutes >= 60) {
        current.setHours(current.getHours() + 1);
        current.setMinutes(nextMinutes - 60);
      } else {
        current.setMinutes(nextMinutes);
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
    const message = language === 'fr' 
      ? `Bonjour! Je souhaite confirmer ma consultation gratuite pour le ${dateStr} à ${selectedTime}.`
      : `Hi! I'd like to confirm my free consultation for ${dateStr} at ${selectedTime}.`;
    
    const whatsappUrl = `https://wa.me/33634175357?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Left Side: Calendar */}
          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-blue-500" />
                {format(currentMonth, 'MMMM yyyy', { locale })}
              </h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div key={i} className="text-center text-xs font-medium text-zinc-500 py-2">
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
                      aspect-square flex items-center justify-center rounded-xl text-sm transition-all relative
                      ${!isCurrentMonth ? 'opacity-20' : ''}
                      ${isSelected ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : ''}
                      ${!isSelected && !disabled ? 'hover:bg-white/5 text-zinc-300' : ''}
                      ${disabled ? 'text-zinc-700 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    {format(day, 'd')}
                    {isSelected && (
                      <motion.div 
                        layoutId="activeDay"
                        className="absolute inset-0 border-2 border-blue-400 rounded-xl"
                      />
                    )}
                  </button>
                );
              })}
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 text-[10px] text-zinc-500 uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                {language === 'fr' ? 'Sélectionné' : 'Selected'}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
                {language === 'fr' ? 'Indisponible' : 'Unavailable'}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                {language === 'fr' ? 'Disponible (Lun, Mar, Jeu)' : 'Available (Mon, Tue, Thu)'}
              </div>
            </div>
          </div>

          {/* Right Side: Time Slots */}
          <div className="w-full md:w-64 p-6 bg-white/[0.02] flex flex-col">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-blue-500" />
              {language === 'fr' ? 'Heure' : 'Time'}
            </h3>

            <div className="flex-1 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
              {!selectedDate ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-zinc-500 py-10">
                  <CalendarIcon className="w-8 h-8 mb-3 opacity-20" />
                  <p className="text-sm">
                    {language === 'fr' ? 'Choisissez une date d\'abord' : 'Pick a date first'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        py-3 px-4 rounded-xl text-sm font-medium transition-all border
                        ${selectedTime === time 
                          ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20' 
                          : 'bg-white/5 border-white/5 text-zinc-400 hover:border-white/20 hover:bg-white/10'}
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              disabled={!selectedDate || !selectedTime}
              onClick={handleConfirm}
              className={`
                mt-6 w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all
                ${selectedDate && selectedTime 
                  ? 'bg-white text-black hover:scale-[1.02] active:scale-[0.98]' 
                  : 'bg-white/10 text-white/30 cursor-not-allowed'}
              `}
            >
              <Check className="w-5 h-5" />
              {language === 'fr' ? 'Confirmer' : 'Confirm'}
            </button>
          </div>

          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-500 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
