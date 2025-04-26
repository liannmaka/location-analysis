'use client';

import React from 'react'
import { useState } from 'react';

interface ExpandablePanelProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const ExpandablePanel: React.FC<ExpandablePanelProps> = ({title, children, defaultOpen}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  return (
    <div className="border rounded-lg mb-4 bg-white shadow-sm">
      <button
        onClick={() => setIsOpen(previousValue => !previousValue)}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center px-4 py-3 text-left text-blue-900 font-semibold focus:outline-none"
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="px-4 pb-4">{children}</div>}
    </div>
  )
}

export default ExpandablePanel
