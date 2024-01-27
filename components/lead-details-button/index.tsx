'use client';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import { useState, useRef } from 'react';
import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import LeadDetails from '@/components/lead-details';
import { LeadsDataType, AssignToUsers } from '@/models/global-types';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import LeadsOptions from './leads-options';

const LeadDetailsButton = ({
  data,
  executivesOption,
}: {
  data: LeadsDataType;
  executivesOption: AssignToUsers[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(false);
  const ref = useRef<any>(null);

  const toggleDrawer = () => {
    setIsOpen((prevState: any) => !prevState);
  };

  const handleViewButton = () => {
    setIsOpen(true);
    ref.current.close();
  };

  const toggleButtons = () => {
    setOptions((prevState) => !prevState);
  };

  return (
    <>
      <Popup
        ref={ref}
        trigger={
          <div className=''>
            <Image className='cursor-pointer h-6 w-6' src={moreImage} alt='' />
          </div>
        }
        position='left center'
        on='click'
        closeOnDocumentClick
        closeOnEscape
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{
          padding: '0px',
          border: 'none',
          background: '#F8F8F8',
          borderRadius: '0.75rem',
          marginLeft: '10px',
        }}
        arrow={false}>
        <LeadsOptions handleViewButton={handleViewButton} />
      </Popup>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        size={450}
        overlayOpacity={0}>
        <LeadDetails
          setIsOpen={setIsOpen}
          data={data}
          executivesOption={executivesOption}
        />
      </Drawer>
    </>
  );
};

export default LeadDetailsButton;
