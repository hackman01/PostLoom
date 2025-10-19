
import React, { useState, useEffect } from 'react';
import { X, Mail, User, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function LoginDialog({ isOpen, onClose }) {

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Dialog */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div
                    className="bg-white flex items-center justify-between h-auto relative rounded-3xl color-black shadow-2xl w-full max-w-md pointer-events-auto transform transition-all duration-300 scale-100 "
                    onClick={(e) => e.stopPropagation()}
                >


                    {/* Body */}
                    <div className="px-8 text-gray-900 py-6">
                        Launching Soon !!
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute right-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} className="text-gray-500" />
                    </button>
                  


                </div>
            </div>
        </>
    );
}