import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, Lock, Scale } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'mentions' | 'terms' | 'privacy';
}

export const LegalModal: React.FC<LegalModalProps> = ({ 
  isOpen, 
  onClose,
  initialTab = 'mentions'
}) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'mentions' | 'terms' | 'privacy'>(initialTab);

  const isFr = language === 'fr';
  const isAr = language === 'ar';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
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
            className="relative w-full max-w-3xl bg-[#090d14] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">
                  {isFr ? 'Informations Juridiques & Cadre de Confiance' : isAr ? 'المعلومات القانونية وشروط الخدمة' : 'Legal & Trust Information'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10 px-6 bg-white/[0.02] text-xs font-bold">
              <button
                onClick={() => setActiveTab('mentions')}
                className={`py-3 px-4 border-b-2 transition-colors ${
                  activeTab === 'mentions'
                    ? 'border-emerald-400 text-emerald-300'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                {isFr ? 'Mentions Légales' : isAr ? 'البيانات القانونية' : 'Legal Notice'}
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`py-3 px-4 border-b-2 transition-colors ${
                  activeTab === 'terms'
                    ? 'border-emerald-400 text-emerald-300'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                {isFr ? 'Conditions de Prestation (CGV)' : isAr ? 'شروط الخدمة' : 'Terms of Service'}
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`py-3 px-4 border-b-2 transition-colors ${
                  activeTab === 'privacy'
                    ? 'border-emerald-400 text-emerald-300'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                {isFr ? 'Politique de Confidentialité' : isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm text-zinc-300 leading-relaxed custom-scrollbar">
              {activeTab === 'mentions' && (
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-white">1. Éditeur de la plateforme</h4>
                  <p>
                    Le site <strong>webz.live</strong> est édité et géré par <strong>Nezar Abdeljalil</strong>, agissant en qualité de Fondateur & Creative Technologist sous le régime de l'<strong>Auto-Entrepreneur</strong>, immatriculé au Maroc.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400 text-xs">
                    <li>Activité : Prestations d'ingénierie logicielle, création de sites internet, design d'interfaces et conseil technologique.</li>
                    <li>Siège d'activité : Casablanca, Maroc.</li>
                    <li>Contact direct : <a href="mailto:abdelnezar7@gmail.com" className="text-emerald-400 hover:underline">abdelnezar7@gmail.com</a> | Téléphone : +212 634 175 357.</li>
                    <li>Facturation : Facturation professionnelle émise avec Identifiant Commun de l'Entreprise (ICE) et Identifiant Fiscal (IF) pour toutes les prestations B2B marocaines et internationales.</li>
                  </ul>

                  <h4 className="text-base font-bold text-white pt-2">2. Hébergement de l'infrastructure</h4>
                  <p className="text-zinc-400 text-xs">
                    Le site est hébergé sur le réseau mondial haute performance de <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, USA), garantissant une haute disponibilité (99.99%) et une sécurité certifiée SSL/TLS.
                  </p>
                </div>
              )}

              {activeTab === 'terms' && (
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-white">1. Modalités de règlement & Acompte</h4>
                  <p className="text-xs text-zinc-400">
                    Toute commande fait l'objet d'un devis préalable validé par le client. Le démarrage des travaux intervient dès réception d'un <strong>acompte de 50%</strong>. Le solde de 50% restant est exigible à la livraison finale et à la mise en production du site.
                  </p>

                  <h4 className="text-base font-bold text-white pt-2">2. Révisions & Processus d'itération</h4>
                  <p className="text-xs text-zinc-400">
                    Chaque offre comprend <strong>deux (2) rounds complets de révisions</strong> sur les maquettes et intégrations. Les retours sont consolidés pour garantir une mise en ligne rapide et conforme aux exigences exprimées lors de la phase de cadrage.
                  </p>

                  <h4 className="text-base font-bold text-white pt-2">3. Cession intégrale de la Propriété Intellectuelle</h4>
                  <p className="text-xs text-zinc-400">
                    Dès paiement intégral du solde, le client devient le <strong>seul et unique propriétaire</strong> de l'intégralité du code source, des maquettes graphiques et des ressources créées spécifiquement pour son projet. webZ conserve uniquement le droit de citer la réalisation dans son portfolio professionnel.
                  </p>

                  <h4 className="text-base font-bold text-white pt-2">4. Ce qui n'est pas inclus (Transparence totale)</h4>
                  <p className="text-xs text-zinc-400">
                    Sauf accord spécifique écrit, les prestations n'incluent pas : l'achat de noms de domaine personnalisés (pris en charge par le client ou facturé au réel), les abonnements d'API payantes tierces (ex: Stripe, OpenAI, passerelles SMS), et la rédaction complète de contenus rédactionnels non fournis au brief.
                  </p>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-white">1. Protection et collecte des données</h4>
                  <p className="text-xs text-zinc-400">
                    webZ s'engage à respecter scrupuleusement la vie privée de ses utilisateurs conformément aux dispositions de la <strong>loi marocaine n° 09-08 (CNDP)</strong> et du <strong>Règlement Général sur la Protection des Données (RGPD)</strong> de l'Union Européenne.
                  </p>

                  <h4 className="text-base font-bold text-white pt-2">2. Données récoltées</h4>
                  <p className="text-xs text-zinc-400">
                    Les seules informations collectées sont celles que vous nous communiquez volontairement lors de la réservation d'un créneau ou d'une prise de contact (Nom, email, numéro WhatsApp, description du projet). Ces données sont utilisées exclusivement pour répondre à votre demande et organiser nos échanges.
                  </p>

                  <h4 className="text-base font-bold text-white pt-2">3. Zéro revente & Sécurité</h4>
                  <p className="text-xs text-zinc-400">
                    Vos données ne sont <strong>jamais vendues, louées ou cédées à des tiers</strong> à des fins publicitaires. Vous pouvez demander la suppression immédiate de vos coordonnées à tout moment en écrivant à <a href="mailto:abdelnezar7@gmail.com" className="text-emerald-400 hover:underline">abdelnezar7@gmail.com</a>.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-white/[0.02] flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
              >
                {isFr ? 'Fermer' : isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
