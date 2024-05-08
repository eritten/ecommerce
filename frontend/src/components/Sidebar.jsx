import React from 'react'
import ListItem from './ListItem'
import { FaComputer, FaShirt } from "react-icons/fa6";
import Accordion from './Accordion';
import AccordionSection from './AccordionSection';

function Sidebar() {
  return (
    <aside role='navigation' className='hidden md:block md:w-[20%] shadow-lg bg-slate-200 sticky top-[76px] z-10 overflow-y-auto h-[calc(100dvh-10px)]'>
        <h2 className='w-full bg-slate-500 text-center text-white p-1 tracking-wide uppercase'>Categories</h2>

        <Accordion>
          <AccordionSection
            header={<ListItem 
                      name='Electronics' 
                      Icon={FaComputer} 
                      totalQuantity={10}
                      isHead
                    />}
            body={
              <ul>
                <ListItem
                  name='Laptops'
                  totalQuantity={5}
                />
                <ListItem
                  name='Tablets'
                  totalQuantity={3}
                />
                <ListItem
                  name='Phones'
                  totalQuantity={2}
                />
              </ul>
            }
          />
          <AccordionSection
            header={<ListItem 
                      name='Fashion' 
                      Icon={FaShirt} 
                      totalQuantity={17}
                      isHead
                    />}
            body={
              <ul>
                <ListItem
                  name='Shirts'
                  totalQuantity={5}
                />
                <ListItem
                  name='Trousers'
                  totalQuantity={3}
                />
                <ListItem
                  name='Shoes'
                  totalQuantity={2}
                />
              </ul>
            }
          />
        </Accordion>
    </aside>
  )
}

export default Sidebar