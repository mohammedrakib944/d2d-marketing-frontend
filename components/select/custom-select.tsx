'use client';

import { SelectProps } from '@/models/global-types';
import { useRef, useState } from 'react';
import Select from 'react-select';
import './style.css';

export const CustomSelect = ({
  label,
  className,
  setSelected = () => {},
  options = [],
  defaultValue,
  isBothSelectFieldNull,
  setIsBothSelectFieldNull = () => {},
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (selectedOption: any) => {
    setSelected(selectedOption.value);
    setIsBothSelectFieldNull(false);
  };
  return (
    <div className='flex flex-col' ref={ref}>
      <label className='text-[#00156A] text-xs 2xl:text-sm mb-1 font-medium'>
        {label}
        {isBothSelectFieldNull && (
          <span className='text-red-500 ml-1'>{`(${label} is required)`}</span>
        )}
      </label>
      <div className='relative font-medium '>
        <Select
          className='h-[48px] 2xl:h-14 font-medium text-black text-sm 2xl:text-[16px] tracking-[-0.28px] leading-[normal]'
          styles={{
            control: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              border: isBothSelectFieldNull
                ? '1px solid red'
                : isFocused
                ? '1px solid #a855f7'
                : '1px solid #F3F3F3',
              '&:hover': {
                border: isBothSelectFieldNull
                  ? '1px solid red'
                  : isFocused
                  ? '1px solid #a855f7'
                  : '1px solid #F3F3F3',
              },
              borderRadius: '10px',
              width: '100%',
              height: '100%',
              boxShadow: isFocused ? '0 0 0 3px #e9d5ff' : 'none',
              transition: 'all 500ms',
            }),
          }}
          options={options}
          defaultValue={
            defaultValue
              ? {
                  value: defaultValue,
                  label: defaultValue.charAt(0).toUpperCase() + defaultValue.slice(1),
                }
              : { value: '', label: 'Select' }
          }
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
