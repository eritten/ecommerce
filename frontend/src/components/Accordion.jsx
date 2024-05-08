import React, {useState} from 'react'

function Accordion({children, ...otherProps}) {
    const [openIndex, setOpenIndex] = useState(null);

  const handleToggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='accordion-box' {...otherProps}>
      {/* Iterate over children to create multiple accordion sections */}
      {React.Children.map(children, (child, index) => (
        <div className="accordion" key={index}>
          {React.cloneElement(child, {
            isOpen: index === openIndex,
            onToggle: () => handleToggleAccordion(index),
          })}
        </div>
      ))}
    </div>
  )
}

export default Accordion