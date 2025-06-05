
import jsPDF from 'jspdf';

export const generateRetirementGuide = () => {
  const doc = new jsPDF();
  
  // Helper function to add header with logo and company info to each page
  const addHeader = (doc: jsPDF, pageTitle?: string) => {
    // Company logo (placeholder - in real implementation, you'd load the actual image)
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('LOGO', 20, 15);
    doc.rect(15, 10, 25, 10); // Logo placeholder box
    
    // Company name
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 100);
    doc.text('Grow-Shine Financial Group LLC', 45, 18);
    
    // Contact info in header
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text('Phone: (609) 674-7817  |  Email: info@growshinefin.com  |  Website: growshinefin.com', 45, 25);
    
    // Page title if provided
    if (pageTitle) {
      doc.setFontSize(16);
      doc.setTextColor(40, 40, 100);
      doc.text(pageTitle, 20, 40);
    }
    
    return 45; // Return starting Y position for content
  };
  
  // Helper function to add footer
  const addFooter = (doc: jsPDF, pageNumber: number) => {
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text('Licensed financial professionals | Securities offered through licensed representatives.', 20, 285);
    doc.text(`© 2024 Grow-Shine Financial Group LLC. All rights reserved. | Page ${pageNumber}`, 20, 292);
  };
  
  // Title Page
  let startY = addHeader(doc);
  
  doc.setFontSize(28);
  doc.setTextColor(40, 40, 100);
  doc.text('RETIREMENT RESCUE GUIDE', 20, startY + 30);
  
  doc.setFontSize(18);
  doc.setTextColor(200, 150, 50);
  doc.text('Your Complete Guide to', 20, startY + 50);
  doc.text('Bulletproof Retirement Planning', 20, startY + 65);
  
  // Large company contact section on title page
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 100);
  doc.text('Contact Information:', 20, startY + 120);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('📞 Phone: (609) 674-7817', 20, startY + 140);
  doc.text('✉️ Email: info@growshinefin.com', 20, startY + 155);
  doc.text('🌐 Website: growshinefin.com', 20, startY + 170);
  doc.text('📍 Location: New Jersey, USA', 20, startY + 185);
  
  // Services offered
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 100);
  doc.text('Our Services:', 20, startY + 210);
  
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const services = [
    '• Fixed Indexed Annuities',
    '• Retirement Income Planning', 
    '• 401(k) & IRA Rollovers',
    '• Tax-Deferred Growth Strategies',
    '• Principal Protection Solutions'
  ];
  
  services.forEach((service, index) => {
    doc.text(service, 20, startY + 225 + (index * 8));
  });
  
  addFooter(doc, 1);
  
  // Table of Contents
  doc.addPage();
  startY = addHeader(doc, 'TABLE OF CONTENTS');
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  const tocItems = [
    '1. Protecting Your Savings from Market Crashes ........................ 3',
    '2. Tax-Deferred Growth Strategies ...................................... 4', 
    '3. Creating Guaranteed Lifetime Income Streams ........................ 5',
    '4. Annuities vs. Traditional Retirement Accounts ..................... 6',
    '5. Next Steps: Schedule Your Free Consultation ........................ 7'
  ];
  
  tocItems.forEach((item, index) => {
    doc.text(item, 20, startY + 20 + (index * 15));
  });
  
  addFooter(doc, 2);
  
  // Chapter 1
  doc.addPage();
  startY = addHeader(doc, 'Chapter 1: Protecting Your Savings from Market Crashes');
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  const chapter1Text = [
    'Market volatility can devastate retirement savings. Learn how Fixed',
    'Indexed Annuities provide principal protection while offering growth potential.',
    '',
    'Key Benefits:',
    '• Zero market loss guarantee',
    '• Participation in market gains', 
    '• No direct market exposure',
    '',
    'Fixed Indexed Annuities offer a unique solution that allows you to',
    'participate in market upside while protecting your principal from',
    'market downturns. This strategy has become increasingly popular',
    'among retirees seeking both growth and security.',
    '',
    'Contact us today for a personalized strategy session:'
  ];
  
  chapter1Text.forEach((line, index) => {
    doc.text(line, 20, startY + 20 + (index * 8));
  });
  
  // Contact box in chapter
  doc.setDrawColor(200, 150, 50);
  doc.setFillColor(255, 250, 240);
  doc.rect(20, startY + 140, 170, 30, 'FD');
  doc.setFontSize(10);
  doc.setTextColor(40, 40, 100);
  doc.text('📞 Call: (609) 674-7817  |  ✉️ Email: info@growshinefin.com', 25, startY + 155);
  
  addFooter(doc, 3);
  
  // Chapter 2
  doc.addPage();
  startY = addHeader(doc, 'Chapter 2: Tax-Deferred Growth Strategies');
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  const chapter2Text = [
    'Maximize your retirement savings with tax-deferred growth',
    'opportunities that compound over time.',
    '',
    'Strategies Include:',
    '• Traditional and Roth IRA optimization',
    '• 401(k) contribution maximization',
    '• Annuity tax advantages',
    '• Strategic withdrawal planning',
    '',
    'Tax-deferred growth allows your money to compound without',
    'the drag of annual taxation, potentially adding decades of',
    'additional growth to your retirement nest egg.'
  ];
  
  chapter2Text.forEach((line, index) => {
    doc.text(line, 20, startY + 20 + (index * 8));
  });
  
  addFooter(doc, 4);
  
  // Chapter 3
  doc.addPage();
  startY = addHeader(doc, 'Chapter 3: Guaranteed Lifetime Income');
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  const chapter3Text = [
    'Discover how to create income streams that you can never outlive,',
    'providing peace of mind in retirement.',
    '',
    'Income Strategies:',
    '• Immediate annuities for instant income',
    '• Deferred annuities for future income',
    '• Social Security optimization',
    '• Pension maximization techniques',
    '',
    'Creating guaranteed lifetime income eliminates longevity risk -',
    'the fear of outliving your money. This foundation provides',
    'confidence to enjoy retirement without financial worry.'
  ];
  
  chapter3Text.forEach((line, index) => {
    doc.text(line, 20, startY + 20 + (index * 8));
  });
  
  addFooter(doc, 5);
  
  // Chapter 4
  doc.addPage();
  startY = addHeader(doc, 'Chapter 4: Annuities vs. Traditional Accounts');
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  const chapter4Text = [
    'Compare the benefits and drawbacks of different retirement',
    'savings vehicles to make informed decisions.',
    '',
    'Comparison Factors:',
    '• Risk tolerance and protection',
    '• Growth potential and limitations',
    '• Liquidity and accessibility',
    '• Tax implications and benefits',
    '• Fees and costs',
    '',
    'Understanding the trade-offs between different retirement',
    'vehicles helps you create a balanced portfolio that meets',
    'your specific needs and risk tolerance.'
  ];
  
  chapter4Text.forEach((line, index) => {
    doc.text(line, 20, startY + 20 + (index * 8));
  });
  
  addFooter(doc, 6);
  
  // Final page - Call to Action
  doc.addPage();
  startY = addHeader(doc, 'Next Steps: Schedule Your Free Consultation');
  
  doc.setFontSize(16);
  doc.setTextColor(40, 40, 100);
  doc.text('Ready to Secure Your Retirement?', 20, startY + 30);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Schedule your complimentary consultation today and discover how', 20, startY + 50);
  doc.text('our personalized retirement strategies can help you achieve', 20, startY + 65);
  doc.text('financial peace of mind.', 20, startY + 80);
  
  // Large contact section
  doc.setDrawColor(40, 40, 100);
  doc.setFillColor(245, 245, 255);
  doc.rect(20, startY + 100, 170, 80, 'FD');
  
  doc.setFontSize(16);
  doc.setTextColor(40, 40, 100);
  doc.text('Contact Grow-Shine Financial Group LLC', 30, startY + 120);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('📞 Phone: (609) 674-7817', 30, startY + 140);
  doc.text('✉️ Email: info@growshinefin.com', 30, startY + 155);
  doc.text('🌐 Website: growshinefin.com', 30, startY + 170);
  
  doc.setFontSize(10);
  doc.setTextColor(200, 150, 50);
  doc.text('Licensed financial professionals serving New Jersey and beyond', 30, startY + 190);
  
  addFooter(doc, 7);
  
  return doc;
};
