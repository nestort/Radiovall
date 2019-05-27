function initData() {
  jimData.variables["oc_OO_TF"] = "1";
  jimData.variables["verifyTransfer"] = "";
  jimData.variables["totalCH"] = "2033.66";
  jimData.variables["TransferRecipientName"] = "";
  jimData.variables["totalSV"] = "2620.00";
  jimData.variables["TransferSendingAcc"] = "";
  jimData.variables["totalCA"] = "1742.66";
  jimData.variables["total Available"] = "6396.32";
  jimData.variables["TransferDestinationAcc"] = "";
  jimData.variables["TransferAmount"] = "";
  jimData.variables["TransferConcept"] = "";
  jimData.variables["listColor"] = "0";
  jimData.variables["TransferDate"] = "";
  jimData.variables["oc_OO_CL"] = "1";
  jimData.datamasters["calles"] = [
    {
      "id": 1,
      "datamaster": "calles",
      "userdata": {
        "Calle1": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "calles",
      "userdata": {
        "Calle1": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "calles",
      "userdata": {
        "Calle1": "sample text"
      }
    },
    {
      "id": 4,
      "datamaster": "calles",
      "userdata": {
        "Calle1": "sample text"
      }
    },
    {
      "id": 5,
      "datamaster": "calles",
      "userdata": {
        "Calle1": "sample text"
      }
    },
    {
      "id": 6,
      "datamaster": "calles",
      "userdata": {
        "Calle1": "sample text"
      }
    }
  ];

  jimData.datamasters["ChristopherAccount"] = [
    {
      "id": 1,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "TransferAmount": "+$234.00",
        "totalChA": "$2033.66",
        "TransferDate": "10/31/2017",
        "TransferOriginAcc": "4356 2132 7767 9897",
        "TransferDestinationAcc": "4422 2156 0567 9256",
        "TransferRecipientName": "Wade Wilson",
        "TransferConcept": "Music concert"
      }
    },
    {
      "id": 2,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "TransferAmount": "-$134.70",
        "totalChA": "$1799.66",
        "TransferDate": "10/27/2017",
        "TransferOriginAcc": "4422 2156 0567 9256",
        "TransferDestinationAcc": "4356 7589 0982 8944",
        "TransferRecipientName": "Natasha Romanova",
        "TransferConcept": "Dress"
      }
    },
    {
      "id": 3,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "TransferAmount": "+$10.90",
        "totalChA": "$1934.36",
        "TransferDate": "10/24/2017",
        "TransferOriginAcc": "4422 2156 0567 9256",
        "TransferDestinationAcc": "4422 2156 0567 9256",
        "TransferRecipientName": "Stephen Strange",
        "TransferConcept": "Cash Deposit"
      }
    },
    {
      "id": 4,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "TransferAmount": "-$320.87",
        "totalChA": "$1923.46",
        "TransferDate": "10/21/2017",
        "TransferOriginAcc": "4422 2156 0567 9000",
        "TransferDestinationAcc": "4321 5634 6723 8900",
        "TransferRecipientName": "Christopher Account",
        "TransferConcept": "Business dinner"
      }
    },
    {
      "id": 5,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "TransferAmount": "+$45.90",
        "totalChA": "$2244.33",
        "TransferDate": "10/12/2017",
        "TransferOriginAcc": "4355 7688 5643 9088",
        "TransferDestinationAcc": "4422 2156 0567 9256",
        "TransferRecipientName": "Carol Danvers",
        "TransferConcept": "Theater tickets"
      }
    },
    {
      "id": 6,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "TransferAmount": "+$47.00",
        "totalChA": "$2198.43",
        "TransferDate": "10/09/2017",
        "TransferOriginAcc": "3345 4256 0978 0099",
        "TransferDestinationAcc": "4422 2156 0567 9256",
        "TransferRecipientName": "Wade Wilson",
        "TransferConcept": "Laundry"
      }
    },
    {
      "id": 7,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "TransferAmount": "-$87.90",
        "totalChA": "$2151.43",
        "TransferDate": "10/06/2017",
        "TransferOriginAcc": "4422 2156 0567 9256",
        "TransferDestinationAcc": "4356 7865 9977 9001",
        "TransferRecipientName": "Carol Danvers",
        "TransferConcept": "Loan payment"
      }
    },
    {
      "id": 8,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "TransferAmount": "+$120.25",
        "totalChA": "$2239.33",
        "TransferDate": "10/03/2017",
        "TransferOriginAcc": "4455 3232 8888 9033",
        "TransferDestinationAcc": "4422 2156 0567 9256",
        "TransferRecipientName": "Stephen Strange",
        "TransferConcept": "Rent"
      }
    }
  ];

  jimData.datamasters["CurrentAccount"] = [
    {
      "id": 1,
      "datamaster": "CurrentAccount",
      "userdata": {
        "TransferAmount": "-$54.00",
        "totalCA": "$1742.66",
        "TransferDate": "10/27/2017",
        "TransferOriginAcc": "4422 2156 0567 9000",
        "TransferDestinationAcc": "4356 2132 7767 9897",
        "TransferRecipientName": "Wade Wilson",
        "TransferConcept": "Lemman concert"
      }
    },
    {
      "id": 2,
      "datamaster": "CurrentAccount",
      "userdata": {
        "TransferAmount": "-$157.70",
        "totalCA": "$1796.66",
        "TransferDate": "10/21/2017",
        "TransferOriginAcc": "4422 2156 0567 9000",
        "TransferDestinationAcc": "3344 5611 4783 9080",
        "TransferRecipientName": "Natasha Romanova",
        "TransferConcept": "For party dress"
      }
    },
    {
      "id": 3,
      "datamaster": "CurrentAccount",
      "userdata": {
        "TransferAmount": "+$210.90",
        "totalCA": "$1954.36",
        "TransferDate": "10/18/2017",
        "TransferOriginAcc": "3344 5611 4783 9080",
        "TransferDestinationAcc": "4422 2156 0567 9000",
        "TransferRecipientName": "Jane Doe",
        "TransferConcept": "Loan payment"
      }
    },
    {
      "id": 4,
      "datamaster": "CurrentAccount",
      "userdata": {
        "TransferAmount": "-$120.87",
        "totalCA": "$1743.46",
        "TransferDate": "10/11/2017",
        "TransferOriginAcc": "4422 2156 0567 9000",
        "TransferDestinationAcc": "4422 2156 0567 9256",
        "TransferRecipientName": "Christopher Account",
        "TransferConcept": "Saturday lunch"
      }
    },
    {
      "id": 5,
      "datamaster": "CurrentAccount",
      "userdata": {
        "TransferAmount": "+$245.90",
        "totalCA": "$1864.33",
        "TransferDate": "10/10/2017",
        "TransferOriginAcc": "4356 2132 7767 9897",
        "TransferDestinationAcc": "4422 2156 0567 9000",
        "TransferRecipientName": "Jane Doe",
        "TransferConcept": "Theater tickets"
      }
    },
    {
      "id": 6,
      "datamaster": "CurrentAccount",
      "userdata": {
        "TransferAmount": "+$47.00",
        "totalCA": "$1618.43",
        "TransferDate": "10/09/2017",
        "TransferOriginAcc": "4455 3232 8888 9033",
        "TransferDestinationAcc": "4422 2156 0567 9000",
        "TransferRecipientName": "Jane Doe",
        "TransferConcept": "Cash Deposit"
      }
    },
    {
      "id": 7,
      "datamaster": "CurrentAccount",
      "userdata": {
        "TransferAmount": "-$67.90",
        "totalCA": "$1571.43",
        "TransferDate": "10/07/2017",
        "TransferOriginAcc": "4422 2156 0567 9000",
        "TransferDestinationAcc": "3345 4256 0978 0099",
        "TransferRecipientName": "Carol Danvers",
        "TransferConcept": "Asked loan"
      }
    },
    {
      "id": 8,
      "datamaster": "CurrentAccount",
      "userdata": {
        "TransferAmount": "-$50.25",
        "totalCA": "$1639.33",
        "TransferDate": "10/04/2017",
        "TransferOriginAcc": "4422 2156 0567 9000",
        "TransferDestinationAcc": "4455 3232 8888 9033",
        "TransferRecipientName": "Stephen Strange",
        "TransferConcept": "Tapas Restaurant Bill"
      }
    }
  ];

  jimData.datamasters["SavingsAccount"] = [
    {
      "id": 1,
      "datamaster": "SavingsAccount",
      "userdata": {
        "TransferAmount": "+$150.00",
        "totalSA": "$2620.00",
        "TransferDate": "11/10/2017",
        "TransferOriginAcc": "4356 2132 4455 9856",
        "TransferDestinationAcc": "4356 2132 7767 9897",
        "TransferRecipientName": "Savings account",
        "TransferConcept": "Monthly saving"
      }
    },
    {
      "id": 2,
      "datamaster": "SavingsAccount",
      "userdata": {
        "TransferAmount": "-$120.00",
        "totalSA": "$2470.00",
        "TransferDate": "11/05/2017",
        "TransferOriginAcc": "4422 2156 0567 9113",
        "TransferDestinationAcc": "3344 5611 4783 9080",
        "TransferRecipientName": "Bills",
        "TransferConcept": "Utility payment"
      }
    },
    {
      "id": 3,
      "datamaster": "SavingsAccount",
      "userdata": {
        "TransferAmount": "+$150.00",
        "totalSA": "$2590.00",
        "TransferDate": "10/25/2017",
        "TransferOriginAcc": "4325 2431 0890 8790",
        "TransferDestinationAcc": "3345 6578 1242 6534",
        "TransferRecipientName": "Savings account",
        "TransferConcept": "Monthly saving"
      }
    },
    {
      "id": 4,
      "datamaster": "SavingsAccount",
      "userdata": {
        "TransferAmount": "-$120.00",
        "totalSA": "$2440.00",
        "TransferDate": "10/15/2017",
        "TransferOriginAcc": "4422 2156 0567 9113",
        "TransferDestinationAcc": "4422 2156 0567 9256",
        "TransferRecipientName": "Bills",
        "TransferConcept": "Utility payment"
      }
    },
    {
      "id": 5,
      "datamaster": "SavingsAccount",
      "userdata": {
        "TransferAmount": "+$150.00",
        "totalSA": "$2560.00",
        "TransferDate": "10/05/2017",
        "TransferOriginAcc": "4357 7890 6543 4532",
        "TransferDestinationAcc": "3312 5678 3464 6500",
        "TransferRecipientName": "Savings account",
        "TransferConcept": "Monthly saving"
      }
    },
    {
      "id": 6,
      "datamaster": "SavingsAccount",
      "userdata": {
        "TransferAmount": "-$120.00",
        "totalSA": "$2410.00",
        "TransferDate": "09/25/2017",
        "TransferOriginAcc": "4422 2156 0567 9113",
        "TransferDestinationAcc": "4423 4534 6745 8900",
        "TransferRecipientName": "Bills",
        "TransferConcept": "Utility payment"
      }
    },
    {
      "id": 7,
      "datamaster": "SavingsAccount",
      "userdata": {
        "TransferAmount": "+$150.00",
        "totalSA": "$2530.00",
        "TransferDate": "09/15/2017",
        "TransferOriginAcc": "4456 6754 1234 8970",
        "TransferDestinationAcc": "3345 4256 0978 0099",
        "TransferRecipientName": "Savings account",
        "TransferConcept": "Monthly saving"
      }
    },
    {
      "id": 8,
      "datamaster": "SavingsAccount",
      "userdata": {
        "TransferAmount": "-$120.00",
        "totalSA": "$2380.00",
        "TransferDate": "09/05/2017",
        "TransferOriginAcc": "4422 2156 0567 9113",
        "TransferDestinationAcc": "4455 3232 8888 9033",
        "TransferRecipientName": "Bills",
        "TransferConcept": "Utility payment"
      }
    }
  ];

  jimData.isInitialized = true;
}