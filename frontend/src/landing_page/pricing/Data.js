let com = {
    index:[['Brokerage','STT/CTT','Transaction charges','GST','SEBI charges','Stamp charges'],['Commodity futures','Commodity options']]
    ,
    Commodity_futures:[
        '0.03% or Rs. 20/executed order whichever is lower',
        '0.01% on sell side (Non-Agri)',
        '  MCX: 0.0021% ,NSE: 0.0001%',
        '	18% on (brokerage + SEBI charges + transaction charges)',
        '  Agri:₹1 / crore,Non-agri:₹10 / crore',
        '0.002% or ₹200 / crore on buy side'
    ],
    	Commodity_options:[
            '	₹ 20/executed order',
            '	0.05% on sell side',
            'MCX: 0.0418%,NSE: 0.001%',
            '18% on (brokerage + SEBI charges + transaction charges)',
            '₹10 / crore',
            '	0.003% or ₹300 / crore on buy side'
        ]
}
let f= {
    index: [
        ['Brokerage','STT/CTT','Transaction charges','GST','SEBI charges','Stamp charges'],
        ['F&O - Futures','F&O - Options']
    ],
    Commodity_futures: [
        '0.03% or Rs. 20/executed order whichever is lower',
        '0.02% on the sell side',
        'NSE: 0.00173%, BSE: 0',
        '18% on (brokerage + SEBI charges + transaction charges)',
        '₹10 / crore',
        '0.002% or ₹200 / crore on buy side'
    ],
    Commodity_options:[
        'Flat Rs. 20 per executed order',
        '0.0125% of intrinsic value (if exercised), 0.1% on sell side (on premium)',
        'NSE: 0.03503% (on premium), BSE: 0.0325% (on premium)',
        '18% on (brokerage + SEBI charges + transaction charges)',
        '₹10 / crore',
        '0.003% or ₹300 / crore on buy side'
    ]




}

let c= {
     index: [
        ['Brokerage','STT/CTT','Transaction charges','GST','SEBI charges','Stamp charges'],
       
        ['Currency futures','Currency options']
    ],
      Commodity_futures: [
        '0.03% or ₹20/executed order whichever is lower',
        'No STT',
        'NSE: 0.00035%, BSE: 0.00045%',
        '18% on (brokerage + SEBI charges + transaction charges)',
        '₹10 / crore',
        '0.0001% or ₹10 / crore on buy side'
    ],
    Commodity_options: [
        '₹20/executed order',
        'No STT',
        'NSE: 0.0311%, BSE: 0.001%',
        '18% on (brokerage + SEBI charges + transaction charges)',
        '₹10 / crore',
        '0.0001% or ₹10 / crore on buy side'
    ]
}
let equal = {
     index: [
        ['Brokerage','STT/CTT','Transaction charges','GST','SEBI charges','Stamp charges'],
          ['Equity delivery', 'Equity intraday']
    ],
      Commodity_futures: [
     'Zero Brokerage',
        '0.1% on buy & sell',
        'NSE: 0.00297%, BSE: 0.00375%',
        '18% on (brokerage + SEBI charges + transaction charges)',
        '₹10 / crore',
        '0.015% or ₹1500 / crore on buy side'
    ],

      Commodity_options: [
           '0.03% or Rs. 20/executed order whichever is lower',
        '0.025% on the sell side',
        'NSE: 0.00297%, BSE: 0.00375%',
        '18% on (brokerage + SEBI charges + transaction charges)',
        '₹10 / crore',
        '0.003% or ₹300 / crore on buy side'
    ]

}
export {equal,f,c,com};