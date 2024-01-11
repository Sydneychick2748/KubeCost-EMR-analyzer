// src/data/EMRData.jsx

// emrData.js

  // emrData.js
// export const EMR_DATA =[ {
//   "j-2CDBZ8DU5A1O0": {
//     "Window": {
//       "start": "2023-12-21T00:00:00Z",
//       "end": "2023-12-22T00:00:00Z"
//     },
//     "Steps": {
//       "s-123456": {
//         "Name": "Step One",
//         "UserName": "ajay",
//         "ID": "s-123456",
//         "UserARN": "u-asdf"
//       },
//       "s-78910": {
//         "Name": "Step Two",
//         "UserName": "ajay",
//         "ID": "s-78910",
//         "UserARN": "u-asdf"
//       }
//     },
//     "AccountID": "297945954695",
//     "JobID": "j-2CDBZ8DU5A1O0",
//     "InstanceID": "",
//     "PodName": "",
//     "InstanceType": "",
//     "Cost": 2.464,
//     "Adjustment": 0.0,
//     "IdlePct": 1.0,
//     "Tags": {
//       "team": "hackathon"
//     },
//     "Timestamps": [1668896400, 1668900000, 1668903600],
//     "Resources": [{ "Memory": 1024 }, { "Memory": 1024 }, { "Memory": 1024 }],
//     "MemoryAllocated": 2048,
//     "MemoryUsed": 1024,
//     "Runtime": 180
//   },
//   "j-ABCDEF123456": {
//     "Window": {
//       "start": "2023-12-22T00:00:00Z",
//       "end": "2023-12-23T00:00:00Z"
//     },
//     "Steps": {
//       "s-111111": {
//         "Name": "Step One",
//         "UserName": "john",
//         "ID": "s-111111",
//         "UserARN": "u-xyz"
//       },
//       "s-222222": {
//         "Name": "Step Two",
//         "UserName": "john",
//         "ID": "s-222222",
//         "UserARN": "u-xyz"
//       }
//     },
//     "AccountID": "297945954695",
//     "JobID": "j-ABCDEF123456",
//     "InstanceID": "i-789012345678",
//     "PodName": "",
//     "InstanceType": "t2.micro",
//     "Cost": 1.234,
//     "Adjustment": 0.0,
//     "IdlePct": 0.5,
//     "Tags": {
//       "team": "development"
//     },
//     "Timestamps": [1668903600, 1668907200],
//     "Resources": [{ "Memory": 360 }, { "Memory": 512 }],
//     "MemoryUsed": 436,
//     "MemoryAllocated": 1024,
//     "Runtime": 120
//   },
//   "j-XYZ987654321": {
//     "Window": {
//       "start": "2023-12-23T00:00:00Z",
//       "end": "2023-12-24T00:00:00Z"
//     },
//     "Steps": {
//       "s-333333": {
//         "Name": "Step One",
//         "UserName": "alice",
//         "ID": "s-333333",
//         "UserARN": "u-abc"
//       },
//       "s-444444": {
//         "Name": "Step Two",
//         "UserName": "alice",
//         "ID": "s-444444",
//         "UserARN": "u-abc"
//       }
//     },
//     "AccountID": "297945954695",
//     "JobID": "j-XYZ987654321",
//     "InstanceID": "i-012345678901",
//     "PodName": "",
//     "InstanceType": "m5.large",
//     "Cost": 3.567,
//     "Adjustment": 0.0,
//     "IdlePct": 0.8,
//     "Tags": {
//       "team": "testing"
//     },
//     "MemoryAllocated": 4096,
//     "MemoryUsed": 2048,
//     "Runtime": 180
//   },
 
//   "j-456DEF789012": {
//     "Window": {
//       "start": "2023-12-24T00:00:00Z",
//       "end": "2023-12-25T00:00:00Z"
//     },
//     "Steps": {
//       "s-555555": {
//         "Name": "Step One",
//         "UserName": "mary",
//         "ID": "s-555555",
//         "UserARN": "u-def"
//       },
//       "s-666666": {
//         "Name": "Step Two",
//         "UserName": "mary",
//         "ID": "s-666666",
//         "UserARN": "u-def"
//       }
//     },
//     "AccountID": "297945954695",
//     "JobID": "j-456DEF789012",
//     "InstanceID": "i-012345678902",
//     "PodName": "",
//     "InstanceType": "c5.xlarge",
//     "Cost": 5.678,
//     "Adjustment": 0.0,
//     "IdlePct": 0.3,
//     "Tags": {
//       "team": "hackathon"
//     },
//     "MemoryAllocated": 8192,
//     "MemoryUsed": 4096,
//     "Runtime": 240
//   },
//   "j-789GHI012345": {
//     "Window": {
//       "start": "2023-12-25T00:00:00Z",
//       "end": "2023-12-26T00:00:00Z"
//     },
//     "Steps": {
//       "s-777777": {
//         "Name": "Step One",
//         "UserName": "peter",
//         "ID": "s-777777",
//         "UserARN": "u-ghi"
//       },
//       "s-888888": {
//         "Name": "Step Two",
//         "UserName": "peter",
//         "ID": "s-888888",
//         "UserARN": "u-ghi"
//       }
//     },
//     "AccountID": "297945954695",
//     "JobID": "j-789GHI012345",
//     "InstanceID": "i-012345678903",
//     "PodName": "",
//     "InstanceType": "r4.2xlarge",
//     "Cost": 7.89,
//     "Adjustment": 0.0,
//     "IdlePct": 0.6,
//     "Tags": {
//       "team": "development"
//     },
//     "MemoryAllocated": 6144,
//     "MemoryUsed": 3072,
//     "Runtime": 150
//   },
//   "j-101112JKL345": {
//     "Window": {
//       "start": "2023-12-26T00:00:00Z",
//       "end": "2023-12-27T00:00:00Z"
//     },
//     "Steps": {
//       "s-999999": {
//         "Name": "Step One",
//         "UserName": "susan",
//         "ID": "s-999999",
//         "UserARN": "u-jkl"
//       },
//       "s-101010": {
//         "Name": "Step Two",
//         "UserName": "susan",
//         "ID": "s-101010",
//         "UserARN": "u-jkl"
//       }
//     },
//     "AccountID": "297945954695",
//     "JobID": "j-101112JKL345",
//     "InstanceID": "i-012345678904",
//     "PodName": "",
//     "InstanceType": "m5.large",
//     "Cost": 10.111,
//     "Adjustment": 0.0,
//     "IdlePct": 0.9,
//     "Tags": {
//       "team": "testing"
//     },
//     "MemoryAllocated": 2048,
//     "MemoryUsed": 1024,
//     "Runtime": 120
//   },
//   "j-MNOPQR678910": {
//     "Window": {
//       "start": "2023-12-27T00:00:00Z",
//       "end": "2023-12-28T00:00:00Z"
//     },
//     "Steps": {
//       "s-111213": {
//         "Name": "Step One",
//         "UserName": "robert",
//         "ID": "s-111213",
//         "UserARN": "u-mno"
//       },
//       "s-121314": {
//         "Name": "Step Two",
//         "UserName": "robert",
//         "ID": "s-121314",
//         "UserARN": "u-mno"
//       }
//     },
//     "AccountID": "297945954695",
//     "JobID": "j-MNOPQR678910",
//     "InstanceID": "i-012345678905",
//     "PodName": "",
//     "InstanceType": "t3.small",
//     "Cost": 12.345,
//     "Adjustment": 0.0,
//     "IdlePct": 0.2,
//     "Tags": {
//       "team": "hackathon"
//     },
//     "MemoryAllocated": 1024,
//     "MemoryUsed": 512,
//     "Runtime": 60
//   },
//   "j-STUVWX911213": {
//     "Window": {
//       "start": "2023-12-28T00:00:00Z",
//       "end": "2023-12-29T00:00:00Z"
//     },
//     "Steps": {
//       "s-131415": {
//         "Name": "Step One",
//         "UserName": "olivia",
//         "ID": "s-131415",
//         "UserARN": "u-stu"
//       },
//       "s-141516": {
//         "Name": "Step Two",
//         "UserName": "olivia",
//         "ID": "s-141516",
//         "UserARN": "u-stu"
//       }
//     },
//     "AccountID": "297945954695",
//     "JobID": "j-STUVWX911213",
//     "InstanceID": "i-012345678906",
//     "PodName": "",
//     "InstanceType": "c4.large",
//     "Cost": 14.567,
//     "Adjustment": 0.0,
//     "IdlePct": 0.7,
//     "Tags": {
//       "team": "development"
//     },
//     "MemoryAllocated": 4096,
//     "MemoryUsed": 2048,
//     "Runtime": 180
//   },
//   "j-YZABCD121314": {
//     "Window": {
//       "start": "2023-12-29T00:00:00Z",
//       "end": "2023-12-30T00:00:00Z"
//     },
//     "Steps": {
//       "s-151617": {
//         "Name": "Step One",
//         "UserName": "jack",
//         "ID": "s-151617",
//         "UserARN": "u-yza"
//       },
//       "s-161718": {
//         "Name": "Step Two",
//         "UserName": "jack",
//         "ID": "s-161718",
//         "UserARN": "u-yza"
//       }
//     },
//     "AccountID": "297945954695",
//     "JobID": "j-YZABCD121314",
//     "InstanceID": "i-012345678907",
//     "PodName": "",
//     "InstanceType": "m5.xlarge",
//     "Cost": 16.789,
//     "Adjustment": 0.0,
//     "IdlePct": 0.4,
//     "Tags": {
//       "team": "testing"
//     },
//     "MemoryAllocated": 8192,
//     "MemoryUsed": 4096,
//     "Runtime": 240
//   },
//   "j-EFGHIJ141516": {
//     "Window": {
//       "start": "2023-12-30T00:00:00Z",
//       "end": "2023-12-31T00:00:00Z"
//     },
//     "Steps": {
//       "s-171819": {
//         "Name": "Step One",
//         "UserName": "emily",
//         "ID": "s-171819",
//         "UserARN": "u-efg"
//       },
//       "s-181920": {
//         "Name": "Step Two",
//         "UserName": "emily",
//         "ID": "s-181920",
//         "UserARN": "u-efg"
//       }
//     },
//     "AccountID": "297945954695",
//     "JobID": "j-EFGHIJ141516",
//     "InstanceID": "i-012345678908",
//     "PodName": "",
//     "InstanceType": "r5.large",
//     "Cost": 18.91,
//     "Adjustment": 0.0,
//     "IdlePct": 0.1,
//     "Tags": {
//       "team": "hackathon"
//     },
//     "MemoryAllocated": 6144,
//     "MemoryUsed": 3072,
//     "Runtime": 150
//   }
// }];



export const EMR_DATA =[ {
  "jobID":"j-2CDBZ8DU5A1O0",
    "Window": {
      "start": "2023-12-21T00:00:00Z",
      "end": "2023-12-22T00:00:00Z"
    },
    "Steps": {
      "s-123456": {
        "Name": "Step One",
        "UserName": "ajay",
        "ID": "s-123456",
        "UserARN": "u-asdf"
      },
      "s-78910": {
        "Name": "Step Two",
        "UserName": "ajay",
        "ID": "s-78910",
        "UserARN": "u-asdf"
      }
    },
    "AccountID": "297945954695",
    "JobID": "j-2CDBZ8DU5A1O0",
    "InstanceID": "",
    "PodName": "",
    "InstanceType": "",
    "Cost": 2.464,
    "Adjustment": 0.0,
    "IdlePct": 1.0,
    "Tags": {
      "team": "hackathon"
    },
    "Timestamps": [1668896400, 1668900000, 1668903600],
    "Resources": [{ "Memory": 1024 }, { "Memory": 1024 }, { "Memory": 1024 }],
    "MemoryAllocated": 2048,
    "MemoryUsed": 1024,
    "Runtime": 180
  },
  {
    "jobID":"j-ABCDEF123456",
    "Window": {
      "start": "2023-12-22T00:00:00Z",
      "end": "2023-12-23T00:00:00Z"
    },
    "Steps": {
      "s-111111": {
        "Name": "Step One",
        "UserName": "john",
        "ID": "s-111111",
        "UserARN": "u-xyz"
      },
      "s-222222": {
        "Name": "Step Two",
        "UserName": "john",
        "ID": "s-222222",
        "UserARN": "u-xyz"
      }
    },
    "AccountID": "297945954695",
    "JobID": "j-ABCDEF123456",
    "InstanceID": "i-789012345678",
    "PodName": "",
    "InstanceType": "t2.micro",
    "Cost": 1.234,
    "Adjustment": 0.0,
    "IdlePct": 0.5,
    "Tags": {
      "team": "development"
    },
    "Timestamps": [1668903600, 1668907200],
    "Resources": [{ "Memory": 360 }, { "Memory": 512 }],
    "MemoryUsed": 436,
    "MemoryAllocated": 1024,
    "Runtime": 120
  },
  {
    
    "jobID":"j-XYZ987654321",
    "Window": {
      "start": "2023-12-23T00:00:00Z",
      "end": "2023-12-24T00:00:00Z"
    },
    "Steps": {
      "s-333333": {
        "Name": "Step One",
        "UserName": "alice",
        "ID": "s-333333",
        "UserARN": "u-abc"
      },
      "s-444444": {
        "Name": "Step Two",
        "UserName": "alice",
        "ID": "s-444444",
        "UserARN": "u-abc"
      }
    },
    "AccountID": "297945954695",
    "JobID": "j-XYZ987654321",
    "InstanceID": "i-012345678901",
    "PodName": "",
    "InstanceType": "m5.large",
    "Cost": 3.567,
    "Adjustment": 0.0,
    "IdlePct": 0.8,
    "Tags": {
      "team": "testing"
    },
    "MemoryAllocated": 4096,
    "MemoryUsed": 2048,
    "Runtime": 180
  },
{

    "jobID":"j-456DEF789012",
    "Window": {
      "start": "2023-12-24T00:00:00Z",
      "end": "2023-12-25T00:00:00Z"
    },
    "Steps": {
      "s-555555": {
        "Name": "Step One",
        "UserName": "mary",
        "ID": "s-555555",
        "UserARN": "u-def"
      },
      "s-666666": {
        "Name": "Step Two",
        "UserName": "mary",
        "ID": "s-666666",
        "UserARN": "u-def"
      }
    },
    "AccountID": "297945954695",
    "JobID": "j-456DEF789012",
    "InstanceID": "i-012345678902",
    "PodName": "",
    "InstanceType": "c5.xlarge",
    "Cost": 5.678,
    "Adjustment": 0.0,
    "IdlePct": 0.3,
    "Tags": {
      "team": "hackathon"
    },
    "MemoryAllocated": 8192,
    "MemoryUsed": 4096,
    "Runtime": 240
  },
  {
    "jobID":"j-789GHI012345",
    "Window": {
      "start": "2023-12-25T00:00:00Z",
      "end": "2023-12-26T00:00:00Z"
    },
    "Steps": {
      "s-777777": {
        "Name": "Step One",
        "UserName": "peter",
        "ID": "s-777777",
        "UserARN": "u-ghi"
      },
      "s-888888": {
        "Name": "Step Two",
        "UserName": "peter",
        "ID": "s-888888",
        "UserARN": "u-ghi"
      }
    },
    
    "AccountID": "297945954695",
    "JobID": "j-789GHI012345",
    "InstanceID": "i-012345678903",
    "PodName": "",
    "InstanceType": "r4.2xlarge",
    "Cost": 7.89,
    "Adjustment": 0.0,
    "IdlePct": 0.6,
    "Tags": {
      "team": "development"
    },
    "MemoryAllocated": 6144,
    "MemoryUsed": 3072,
    "Runtime": 150
  },
  {
    "jobID":"j-101112JKL345",
    "Window": {
      "start": "2023-12-26T00:00:00Z",
      "end": "2023-12-27T00:00:00Z"
    },
    "Steps": {
      "s-999999": {
        "Name": "Step One",
        "UserName": "susan",
        "ID": "s-999999",
        "UserARN": "u-jkl"
      },
      "s-101010": {
        "Name": "Step Two",
        "UserName": "susan",
        "ID": "s-101010",
        "UserARN": "u-jkl"
      }
    },
    "AccountID": "297945954695",
    "JobID": "j-101112JKL345",
    "InstanceID": "i-012345678904",
    "PodName": "",
    "InstanceType": "m5.large",
    "Cost": 10.111,
    "Adjustment": 0.0,
    "IdlePct": 0.9,
    "Tags": {
      "team": "testing"
    },
    "MemoryAllocated": 2048,
    "MemoryUsed": 1024,
    "Runtime": 120
  },
{
   "jobID":"j-MNOPQR678910",
    "Window": {
      "start": "2023-12-27T00:00:00Z",
      "end": "2023-12-28T00:00:00Z"
    },
    "Steps": {
      "s-111213": {
        "Name": "Step One",
        "UserName": "robert",
        "ID": "s-111213",
        "UserARN": "u-mno"
      },
      "s-121314": {
        "Name": "Step Two",
        "UserName": "robert",
        "ID": "s-121314",
        "UserARN": "u-mno"
      }
    },
    "AccountID": "297945954695",
    "JobID": "j-MNOPQR678910",
    "InstanceID": "i-012345678905",
    "PodName": "",
    "InstanceType": "t3.small",
    "Cost": 12.345,
    "Adjustment": 0.0,
    "IdlePct": 0.2,
    "Tags": {
      "team": "hackathon"
    },
    "MemoryAllocated": 1024,
    "MemoryUsed": 512,
    "Runtime": 60
  },
  {
    "jobID":"j-STUVWX911213",
    "Window": {
      "start": "2023-12-28T00:00:00Z",
      "end": "2023-12-29T00:00:00Z"
    },
    "Steps": {
      "s-131415": {
        "Name": "Step One",
        "UserName": "olivia",
        "ID": "s-131415",
        "UserARN": "u-stu"
      },
      "s-141516": {
        "Name": "Step Two",
        "UserName": "olivia",
        "ID": "s-141516",
        "UserARN": "u-stu"
      }
    },
    "AccountID": "297945954695",
    "JobID": "j-STUVWX911213",
    "InstanceID": "i-012345678906",
    "PodName": "",
    "InstanceType": "c4.large",
    "Cost": 14.567,
    "Adjustment": 0.0,
    "IdlePct": 0.7,
    "Tags": {
      "team": "development"
    },
    "MemoryAllocated": 4096,
    "MemoryUsed": 2048,
    "Runtime": 180
  },
  {
    "jobID":"j-YZABCD121314",
    "Window": {
      "start": "2023-12-29T00:00:00Z",
      "end": "2023-12-30T00:00:00Z"
    },
    "Steps": {
      "s-151617": {
        "Name": "Step One",
        "UserName": "jack",
        "ID": "s-151617",
        "UserARN": "u-yza"
      },
      "s-161718": {
        "Name": "Step Two",
        "UserName": "jack",
        "ID": "s-161718",
        "UserARN": "u-yza"
      }
    },
    "AccountID": "297945954695",
    "JobID": "j-YZABCD121314",
    "InstanceID": "i-012345678907",
    "PodName": "",
    "InstanceType": "m5.xlarge",
    "Cost": 16.789,
    "Adjustment": 0.0,
    "IdlePct": 0.4,
    "Tags": {
      "team": "testing"
    },
    "MemoryAllocated": 8192,
    "MemoryUsed": 4096,
    "Runtime": 240
  },
  {
    "jobID":"j-EFGHIJ141516",
    "Window": {
      "start": "2023-12-30T00:00:00Z",
      "end": "2023-12-31T00:00:00Z"
    },
    "Steps": {
      "s-171819": {
        "Name": "Step One",
        "UserName": "emily",
        "ID": "s-171819",
        "UserARN": "u-efg"
      },
      "s-181920": {
        "Name": "Step Two",
        "UserName": "emily",
        "ID": "s-181920",
        "UserARN": "u-efg"
      }
    },
    "AccountID": "297945954695",
    "JobID": "j-EFGHIJ141516",
    "InstanceID": "i-012345678908",
    "PodName": "",
    "InstanceType": "r5.large",
    "Cost": 18.91,
    "Adjustment": 0.0,
    "IdlePct": 0.1,
    "Tags": {
      "team": "hackathon"
    },
    "MemoryAllocated": 6144,
    "MemoryUsed": 3072,
    "Runtime": 150
  }
];
