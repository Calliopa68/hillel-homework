const mainAccordion = new Accordion(document.getElementById('accordion'));

mainAccordion.init();
mainAccordion.toggleIndex(0);
mainAccordion.getOpenedIndex();
mainAccordion.addElement('Privet', 'Vlad');
setTimeout(()=> {
    mainAccordion.openAll();
},5000);
setTimeout(()=> {
    mainAccordion.closeAll();
},10000);