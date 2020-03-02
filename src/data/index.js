const data = {
  projects: [
    {
      id: "mpa",
      name: "Multi Product Adviser",
      startDate: "2014-10-11",
      endDate: "2015-6-15",
      description: "multi product adviser",
      technologies: ["angularjs", "less", "gulp", "webpack"],
      company: "aiss",
      images: {
        primary: "",
        secondary: []
      }
    },
    {
      id: "dba",
      name: "Dust Bag Adviser",
      startDate: "2015-10-11",
      endDate: "2016-5-11",
      description: "multi product adviser",
      technologies: ["angularjs", "less", "gulp", "webpack"],
      company: "aiss",
      images: {
        primary: "",
        secondary: []
      }
    },
    {
      id: "liverobe",
      name: "LiveRobe",
      description: "LiveRobe rulz",
      startDate: "2018-10-01",
      endDate: null,
      technologies: ["react-native", "firebase"],
      company: "dina",
      images: {
        primary: "",
        secondary: []
      }
    },
    {
      id: "freebees",
      name: "FreeBees",
      startDate: "2019-03-01",
      endDate: null,
      description: "FreeBees rulz",
      technologies: ["react"],
      company: "dina",
      images: {
        primary: "",
        secondary: []
      }
    },
    {
      id: "tradeproofer",
      name: "TradeProofer",
      description: "TPke",
      technologies: ["anguarjs", "react", "vue"],
      company: "tradeproofer",
      images: {
        primary: "",
        secondary: []
      }
    }
  ],
  workplaces: [
    {
      id: "aiss",
      name: "AISS",
      fromDate: "2014",
      toDate: "2016",
      description: "aiss lol",
      projects: ["mpa", "dba"],
      images: {
        primary: "",
        secondary: []
      }
    },
    {
      id: "dina",
      name: "Digital Natives",
      fromDate: "2018-8-06",
      toDate: null,
      description: "dina lol",
      projects: ["liverobe", "freebees"],
      images: {
        primary: "",
        secondary: []
      }
    },
    {
      id: "tradeproofer",
      name: "TradeProffer",
      fromDate: "2018-8-06",
      toDate: null,
      description: "TP lol",
      projects: ["tradeproofer"],
      images: {
        primary: "",
        secondary: []
      }
    }
  ]
};

export default data;
