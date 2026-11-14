'use client';

import React from 'react';
import { Home, UtensilsCrossed } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{
      backgroundColor: 'var(--brand-cream)'
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet" />
      
      <div className="max-w-lg w-full text-center" dir="rtl">
        
        {/* رقم الخطأ */}
        <h1 className="text-9xl font-bold mb-4" style={{ 
          color: 'var(--brand-primary)',
          fontFamily: "'Cairo', sans-serif"
        }}>
          404
        </h1>

        {/* العنوان */}
        <h2 className="text-3xl font-bold mb-4" style={{ 
          color: 'var(--brand-ink)',
          fontFamily: "'Cairo', sans-serif"
        }}>
          الصفحة غير موجودة
        </h2>

        {/* الوصف */}
        <p className="text-lg mb-8" style={{ color: '#666' }}>
          عفواً، الصفحة التي تبحث عنها غير متوفرة
        </p>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold"
            style={{
              backgroundColor: 'var(--brand-primary)',
              fontFamily: "'Cairo', sans-serif"
            }}
          >
            <Home size={20} />
            <span>الصفحة الرئيسية</span>
          </button>

          <button
            onClick={() => window.location.href = '/#menu'}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold border-2"
            style={{
              borderColor: 'var(--brand-primary)',
              color: 'var(--brand-ink)',
              backgroundColor: 'white',
              fontFamily: "'Cairo', sans-serif"
            }}
          >
            <UtensilsCrossed size={20} />
            <span>قائمة الطعام</span>
          </button>
        </div>
      </div>
    </div>
  );
}