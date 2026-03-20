'use client';

import { useState, useEffect } from 'react';

export default function DisclaimerPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    if (!hasAgreed) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    window.dispatchEvent(new Event('disclaimerAgreed'));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white text-black max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300">
        <div className="p-6 md:p-8 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 border-b pb-4">Disclaimer</h2>
          
          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              In accordance with the regulations of the Bar Council of India, this website of Pradeep Rai (the &quot;Individual&quot;) is only intended to provide information about the Individual; neither the Individual nor any of his team members may advertise, solicit employment, or offer any kind of inducement. It should not be interpreted as any kind of legal advice.
            </p>
            <p>
              Please review and agree to the terms of use and privacy statement on our website. By selecting &quot;I AGREE&quot; below, the website visitor confirms that they opened the website voluntarily and that the information provided is solely intended to help them understand the individual and his activities.
            </p>
          </div>
        </div>
        
        <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-100 flex justify-center">
          <button
            onClick={handleAgree}
            className="w-full sm:w-auto px-12 py-3 bg-gray-900 hover:bg-black text-white font-medium tracking-wide rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            I AGREE
          </button>
        </div>
      </div>
    </div>
  );
}
