
import jsPDF from 'jspdf';

export const generateRetirementGuide = () => {
  const doc = new jsPDF();
  
  // Title Page
  doc.setFontSize(24);
  doc.setTextColor(40, 40, 100); // Navy color
  doc.text('RETIREMENT RESCUE GUIDE', 20, 30);
  
  doc.setFontSize(16);
  doc.setTextColor(200, 150, 50); // Gold color
  doc.text('Your Complete Guide to Bulletproof Retirement Planning', 20, 45);
  
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('Grow-Shine Financial Group LLC', 20, 260);
  doc.text('For personalized guidance, schedule your free consultation', 20, 275);
  
  // Add new page for Table of Contents
  doc.addPage();
  doc.setFontSize(18);
  doc.setTextColor(40, 40, 100);
  doc.text('TABLE OF CONTENTS', 20, 30);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  const tocItems = [
    '1. Protecting Your Savings from Market Crashes ........................ 3',
    '2. Tax-Deferred Growth Strategies ...................................... 4', 
    '3. Creating Guaranteed Lifetime Income Streams ........................ 5',
    '4. Annuities vs. Traditional Retirement Accounts ..................... 6'
  ];
  
  tocItems.forEach((item, index) => {
    doc.text(item, 20, 50 + (index * 15));
  });
  
  // Chapter 1
  doc.addPage();
  doc.setFontSize(16);
  doc.setTextColor(40, 40, 100);
  doc.text('Chapter 1: Protecting Your Savings from Market Crashes', 20, 30);
  
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
    'among retirees seeking both growth and security.'
  ];
  
  chapter1Text.forEach((line, index) => {
    doc.text(line, 20, 50 + (index * 8));
  });
  
  // Chapter 2
  doc.addPage();
  doc.setFontSize(16);
  doc.setTextColor(40, 40, 100);
  doc.text('Chapter 2: Tax-Deferred Growth Strategies', 20, 30);
  
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
    doc.text(line, 20, 50 + (index * 8));
  });
  
  // Chapter 3
  doc.addPage();
  doc.setFontSize(16);
  doc.setTextColor(40, 40, 100);
  doc.text('Chapter 3: Guaranteed Lifetime Income', 20, 30);
  
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
    doc.text(line, 20, 50 + (index * 8));
  });
  
  // Chapter 4
  doc.addPage();
  doc.setFontSize(16);
  doc.setTextColor(40, 40, 100);
  doc.text('Chapter 4: Annuities vs. Traditional Accounts', 20, 30);
  
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
    doc.text(line, 20, 50 + (index * 8));
  });
  
  return doc;
};
