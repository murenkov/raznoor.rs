window.BENCHMARK_DATA = {
  "lastUpdate": 1780240954538,
  "repoUrl": "https://github.com/murenkov/raznoor.rs",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "committer": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "id": "7001c1be02ac6cd2ba66a1d97f554bc88c862377",
          "message": "ci: add benchmark tracking with github-action-benchmark",
          "timestamp": "2026-05-31T09:25:44Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/48/commits/7001c1be02ac6cd2ba66a1d97f554bc88c862377"
        },
        "date": 1780224060552,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 9562,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 10585,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 103304,
            "range": "± 3939",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 101834,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 12378,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 12437,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 123182,
            "range": "± 1776",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 122144,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 14921,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 15207,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 148635,
            "range": "± 1143",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 147376,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 17351,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 17430,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 172261,
            "range": "± 676",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 170809,
            "range": "± 868",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 23974,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 23826,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 239750,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 237052,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 24356,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 24159,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 241846,
            "range": "± 3737",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 239728,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 27959,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 27415,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 278682,
            "range": "± 2738",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 272471,
            "range": "± 1138",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6469,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 42081,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6617,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 41153,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 1224990,
            "range": "± 27396",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 1505944,
            "range": "± 25474",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1818843,
            "range": "± 9711",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 2076563,
            "range": "± 5844",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2877530,
            "range": "± 7591",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2921404,
            "range": "± 13650",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 3354901,
            "range": "± 8120",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 170065,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 171256,
            "range": "± 1232",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 13278044,
            "range": "± 440355",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 17578295,
            "range": "± 58634",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 22229532,
            "range": "± 99741",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 27030563,
            "range": "± 127767",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 38405191,
            "range": "± 175479",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 38704548,
            "range": "± 168927",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 44419202,
            "range": "± 201251",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 176532,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 171282,
            "range": "± 502",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ymurenkov@yandex.ru",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "committer": {
            "email": "17390550+murenkov@users.noreply.github.com",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "distinct": true,
          "id": "fb3be1e62598a0277e862ad92010ebd65f0560b8",
          "message": "ci: add benchmark tracking with github-action-benchmark\n\nAdd a dedicated Benchmarks workflow that runs Criterion benchmarks on\npush to main and pull requests. Results are stored in the gh-pages\nbranch and displayed via a GitHub Pages dashboard with historical\nperformance charts.\n\n- Split benchmarks out of ci.yml into their own workflow\n- Use benchmark-action/github-action-benchmark with cargo tool\n- Store results in gh-pages branch for chart visualization\n- Post PR comments with benchmark deltas against base branch\n- Set 10% alert threshold for regression detection\n- Update CONTRIBUTING.md to document the benchmark dashboard",
          "timestamp": "2026-05-31T13:46:27+03:00",
          "tree_id": "31dc0858ed72a68eb49aea5a096b4f6d8baf6bf5",
          "url": "https://github.com/murenkov/raznoor.rs/commit/fb3be1e62598a0277e862ad92010ebd65f0560b8"
        },
        "date": 1780225022282,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 9290,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 11557,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 113879,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 113058,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 13373,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 13597,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 131772,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 136381,
            "range": "± 2051",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 16016,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 16244,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 156978,
            "range": "± 1194",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 159017,
            "range": "± 2917",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 17545,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 17905,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 173724,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 174911,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 24355,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 24335,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 246020,
            "range": "± 1898",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 242488,
            "range": "± 2741",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 25344,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 24781,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 250128,
            "range": "± 2092",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 245266,
            "range": "± 2116",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 28558,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 28272,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 280279,
            "range": "± 1871",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 276382,
            "range": "± 2248",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6527,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 43533,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6525,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 40861,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 1357189,
            "range": "± 12397",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 1611859,
            "range": "± 36901",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1828989,
            "range": "± 29018",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 2053657,
            "range": "± 3946",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2849993,
            "range": "± 18867",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2952094,
            "range": "± 40391",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 3364548,
            "range": "± 76248",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 167711,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 170581,
            "range": "± 1159",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 14406833,
            "range": "± 19278",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 18214158,
            "range": "± 55651",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 23159125,
            "range": "± 448252",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 26265385,
            "range": "± 814295",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 35582960,
            "range": "± 702766",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 35757752,
            "range": "± 602227",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 40797901,
            "range": "± 724733",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 176219,
            "range": "± 5289",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 178628,
            "range": "± 3010",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "committer": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "id": "09d199e7e103e90e302f81ad849ee854026551f8",
          "message": "perf: avoid double allocation in solve_adaptive result construction",
          "timestamp": "2026-05-31T10:46:31Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/49/commits/09d199e7e103e90e302f81ad849ee854026551f8"
        },
        "date": 1780225332634,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 7355,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 8022,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 75252,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 77997,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 9900,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 10373,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 95944,
            "range": "± 1867",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 100448,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 12435,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 12725,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 121563,
            "range": "± 1740",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 126124,
            "range": "± 2374",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 14713,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 15242,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 145604,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 148936,
            "range": "± 3450",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 21227,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 21506,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 208293,
            "range": "± 832",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 212928,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21488,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 22048,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 211313,
            "range": "± 1095",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 216783,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24718,
            "range": "± 576",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 25309,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 244893,
            "range": "± 1422",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 250041,
            "range": "± 824",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5669,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 36994,
            "range": "± 688",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 5818,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 37671,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 887433,
            "range": "± 4840",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 1147081,
            "range": "± 24088",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1451383,
            "range": "± 18513",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1718781,
            "range": "± 31246",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2510041,
            "range": "± 36975",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2559669,
            "range": "± 49095",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2960006,
            "range": "± 8004",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 144765,
            "range": "± 2036",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 147494,
            "range": "± 2119",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 10335868,
            "range": "± 26106",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14824498,
            "range": "± 53011",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19745016,
            "range": "± 406555",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24386027,
            "range": "± 73263",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 35813779,
            "range": "± 257500",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36163169,
            "range": "± 149125",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 41817774,
            "range": "± 815287",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 144175,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 147681,
            "range": "± 683",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ymurenkov@yandex.ru",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "committer": {
            "email": "17390550+murenkov@users.noreply.github.com",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "distinct": true,
          "id": "2b660c2ad4bc2dd2446307b08c01d334e09eab8f",
          "message": "perf: avoid double allocation in solve_adaptive result construction\n\nReplace the intermediate `Vec<Array1<T>>` in `solve_adaptive` with a\nflat `Vec<T>` that accumulates state data in column-major order, then\npasses it directly to `Array2::from_shape_vec` with `.f()` layout.\nThis eliminates:\n  - One clone of every accepted state vector into the Vec\n  - The final Array2 allocation and column-by-column copy loop\n\nAlso optimize `solve` by hoisting `y` outside the loop to avoid the\nper-iteration `.to_owned()` column copy.",
          "timestamp": "2026-05-31T14:34:34+03:00",
          "tree_id": "69db470676ee1a2211049b02e656c010713c6fb9",
          "url": "https://github.com/murenkov/raznoor.rs/commit/2b660c2ad4bc2dd2446307b08c01d334e09eab8f"
        },
        "date": 1780227884194,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 7456,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 8028,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 76602,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 78599,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 10095,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 10239,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 98592,
            "range": "± 2063",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 100671,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 13279,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 13165,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 130714,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 129428,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 15037,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 15092,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 147869,
            "range": "± 1870",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 148124,
            "range": "± 1867",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 22243,
            "range": "± 1781",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 22015,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 219281,
            "range": "± 5048",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 217518,
            "range": "± 1396",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 22447,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 22200,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 221582,
            "range": "± 1303",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 221954,
            "range": "± 5297",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 25593,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 25288,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 251652,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 249045,
            "range": "± 1583",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5820,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38150,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6076,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38134,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 901147,
            "range": "± 21340",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 1183846,
            "range": "± 5338",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1527676,
            "range": "± 19985",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1760887,
            "range": "± 13893",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2553426,
            "range": "± 13549",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2642326,
            "range": "± 51519",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 3022797,
            "range": "± 64561",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 146088,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 150473,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 11036343,
            "range": "± 257766",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 15234135,
            "range": "± 326930",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 20317040,
            "range": "± 353769",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24273386,
            "range": "± 431038",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36473357,
            "range": "± 90006",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36378001,
            "range": "± 85716",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 41798898,
            "range": "± 806964",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 147930,
            "range": "± 2082",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 148149,
            "range": "± 3215",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "committer": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "id": "5c58f55adb32783c9957925c5e510f0ee7402419",
          "message": "perf(solver): eliminate per-step allocation in solve()",
          "timestamp": "2026-05-31T11:34:39Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/50/commits/5c58f55adb32783c9957925c5e510f0ee7402419"
        },
        "date": 1780228526333,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5237,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 5733,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 54424,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 54469,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 7891,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 7771,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 76336,
            "range": "± 1079",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 75717,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 10373,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10199,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 101141,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 99949,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 12791,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 12510,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 124175,
            "range": "± 719",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 123079,
            "range": "± 736",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19480,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19565,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 192202,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 193062,
            "range": "± 687",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 19976,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 19936,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 195099,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 196226,
            "range": "± 2000",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 22778,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 22323,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 224326,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 219652,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5867,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38139,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 5962,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38007,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 634372,
            "range": "± 2034",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 897655,
            "range": "± 4255",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1184388,
            "range": "± 40003",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1437008,
            "range": "± 20696",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2241456,
            "range": "± 10158",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2282797,
            "range": "± 52871",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2646967,
            "range": "± 56803",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 146106,
            "range": "± 4003",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 149004,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 7887994,
            "range": "± 15658",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 12076911,
            "range": "± 201434",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 16459795,
            "range": "± 34952",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 20964588,
            "range": "± 40710",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 31674780,
            "range": "± 218010",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 31867632,
            "range": "± 62333",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 37356125,
            "range": "± 558300",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 123533,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 122155,
            "range": "± 201",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ymurenkov@yandex.ru",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "committer": {
            "email": "17390550+murenkov@users.noreply.github.com",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "distinct": true,
          "id": "33e2765da77869a777c48d29cbc8216348a859e7",
          "message": "perf(solver): eliminate per-step allocation in solve()\n\nReplace map_collect + assign with a single Zip-based for_each that\nwrites the next state directly into the column and updates y in-place,\navoiding a per-timestep Array1 allocation.",
          "timestamp": "2026-05-31T14:55:49+03:00",
          "tree_id": "5610d23e9b7df52af9b8e25e368134f8ad63179a",
          "url": "https://github.com/murenkov/raznoor.rs/commit/33e2765da77869a777c48d29cbc8216348a859e7"
        },
        "date": 1780229145330,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5247,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 5666,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 54438,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 54458,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 7940,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 7826,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 76569,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 76081,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 10403,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10331,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 101521,
            "range": "± 10581",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 100936,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 12649,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 12569,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 158639,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 122901,
            "range": "± 3296",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19079,
            "range": "± 505",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 18822,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 187984,
            "range": "± 3587",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 185882,
            "range": "± 2812",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 19382,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 19127,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 190937,
            "range": "± 635",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 188793,
            "range": "± 4537",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 22818,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 22320,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 225095,
            "range": "± 12885",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 220689,
            "range": "± 4740",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5854,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 37463,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6012,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38087,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 634444,
            "range": "± 4605",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 906201,
            "range": "± 27737",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1183186,
            "range": "± 18614",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1473888,
            "range": "± 23474",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2214056,
            "range": "± 6271",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2250224,
            "range": "± 4147",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2668100,
            "range": "± 17016",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 145248,
            "range": "± 644",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 149226,
            "range": "± 4468",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 7899099,
            "range": "± 20243",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 12123991,
            "range": "± 33963",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 16417679,
            "range": "± 336051",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 21561654,
            "range": "± 61837",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 31628239,
            "range": "± 214087",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 31791492,
            "range": "± 380508",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 37482888,
            "range": "± 454404",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 123948,
            "range": "± 1939",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 123119,
            "range": "± 4692",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "committer": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "id": "46fc054317b00a678f54575d3d88e5ac5c31b522",
          "message": "perf(solver): deduplicate h = h * fac after accept/reject in solve_adaptive",
          "timestamp": "2026-05-31T11:55:53Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/51/commits/46fc054317b00a678f54575d3d88e5ac5c31b522"
        },
        "date": 1780229601632,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5239,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 5676,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 54444,
            "range": "± 3992",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 54394,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 7968,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 7806,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 76383,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 75660,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 10359,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10228,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 101028,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 100026,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 12621,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 12506,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 123326,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 122267,
            "range": "± 1196",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19089,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 18772,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 187752,
            "range": "± 736",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 184760,
            "range": "± 658",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 19386,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 19087,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 190849,
            "range": "± 1475",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 187953,
            "range": "± 1901",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 22749,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 22261,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 224355,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 219833,
            "range": "± 5293",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5796,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 37594,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 5935,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38014,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 633078,
            "range": "± 2280",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 910394,
            "range": "± 4959",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1178112,
            "range": "± 12723",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1444430,
            "range": "± 21079",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2199298,
            "range": "± 9352",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2245832,
            "range": "± 9268",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2639326,
            "range": "± 22417",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 145256,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 148582,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 7892732,
            "range": "± 15060",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 12072575,
            "range": "± 250257",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 16525000,
            "range": "± 54248",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 21022834,
            "range": "± 126523",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 31695251,
            "range": "± 204925",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 31922927,
            "range": "± 77561",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 37386680,
            "range": "± 77329",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 124075,
            "range": "± 1340",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 122166,
            "range": "± 294",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ymurenkov@yandex.ru",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "committer": {
            "email": "17390550+murenkov@users.noreply.github.com",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "distinct": true,
          "id": "cefd00adcec8e6cbe1bd094c1f655340793ec03f",
          "message": "perf(solver): deduplicate h = h * fac after accept/reject in solve_adaptive\n\nPull the common `h = h * fac` step out of both branches of the\naccept/reject conditional, so it executes unconditionally after the\n`if` block. No behavioral change.",
          "timestamp": "2026-05-31T15:38:59+03:00",
          "tree_id": "e23cf55fb8036417f4ab2f17bc6307d8cce6e83c",
          "url": "https://github.com/murenkov/raznoor.rs/commit/cefd00adcec8e6cbe1bd094c1f655340793ec03f"
        },
        "date": 1780231740127,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5252,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 5676,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 54396,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 54392,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 7924,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 7907,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 76278,
            "range": "± 758",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 75792,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 10394,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10221,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 101155,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 100064,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 12617,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 12546,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 123493,
            "range": "± 949",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 122209,
            "range": "± 4862",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19105,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 18682,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 187831,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 184771,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 19350,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 19061,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 190669,
            "range": "± 1062",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 187777,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 22766,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 22281,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 224778,
            "range": "± 2507",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 220153,
            "range": "± 3415",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5799,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 37451,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 5998,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38116,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 633027,
            "range": "± 14774",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 894407,
            "range": "± 11414",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1178962,
            "range": "± 18904",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1440362,
            "range": "± 20336",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2199199,
            "range": "± 5761",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2239109,
            "range": "± 4738",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2647747,
            "range": "± 11966",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 145402,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 149452,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 7898302,
            "range": "± 28502",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 12091236,
            "range": "± 293606",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 16477266,
            "range": "± 83210",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 21096748,
            "range": "± 137123",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 32033955,
            "range": "± 235112",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 32112363,
            "range": "± 54686",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 37707831,
            "range": "± 139949",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 123993,
            "range": "± 943",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 123051,
            "range": "± 394",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "committer": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "id": "7cae8a62606bf1ebbd7b6ca626b2cd1644b06e06",
          "message": "feat: add event detection (root-finding during integration)",
          "timestamp": "2026-05-31T12:39:04Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/52/commits/7cae8a62606bf1ebbd7b6ca626b2cd1644b06e06"
        },
        "date": 1780232311389,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 10246,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 11596,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 116160,
            "range": "± 793",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 110961,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 13755,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 13375,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 134572,
            "range": "± 1991",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 132753,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 17222,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 17281,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 171106,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 168315,
            "range": "± 2577",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 19298,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 18616,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 191485,
            "range": "± 607",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 184229,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 26365,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 25553,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 260839,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 252816,
            "range": "± 3865",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 26665,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 25931,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 264270,
            "range": "± 2235",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 261333,
            "range": "± 4429",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 30095,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 29124,
            "range": "± 738",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 298302,
            "range": "± 1227",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 289053,
            "range": "± 5114",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6381,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 42014,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6506,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 43025,
            "range": "± 1175",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 1197476,
            "range": "± 31260",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 1447033,
            "range": "± 17855",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1743026,
            "range": "± 28759",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 2009679,
            "range": "± 3283",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2796008,
            "range": "± 82662",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2841198,
            "range": "± 13576",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 3253401,
            "range": "± 28963",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 163962,
            "range": "± 6039",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 165933,
            "range": "± 840",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 15927812,
            "range": "± 68593",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 19825186,
            "range": "± 73253",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 25244443,
            "range": "± 132500",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 30530430,
            "range": "± 310179",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 44694281,
            "range": "± 1329518",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 45535308,
            "range": "± 493446",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 49401847,
            "range": "± 741724",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 183094,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 184416,
            "range": "± 520",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "committer": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "id": "0b2e1d09b536fa8b439dd5e7ac385b804836bbd3",
          "message": "feat: add event detection (root-finding during integration)",
          "timestamp": "2026-05-31T12:39:04Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/52/commits/0b2e1d09b536fa8b439dd5e7ac385b804836bbd3"
        },
        "date": 1780233483967,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5888,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6232,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60046,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60050,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8608,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8609,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83625,
            "range": "± 954",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 83751,
            "range": "± 1531",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11151,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11171,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 107587,
            "range": "± 1680",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 108489,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13452,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13211,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 130479,
            "range": "± 1652",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 129259,
            "range": "± 2443",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20395,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19999,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 199341,
            "range": "± 2548",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 197498,
            "range": "± 1059",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20697,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20319,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 205842,
            "range": "± 2759",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 202701,
            "range": "± 674",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 23616,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 23137,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 232252,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 228892,
            "range": "± 2950",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6064,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38679,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6126,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39108,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 713186,
            "range": "± 1940",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 957307,
            "range": "± 13366",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1261114,
            "range": "± 9872",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1519211,
            "range": "± 18177",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2335610,
            "range": "± 67197",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2375760,
            "range": "± 12153",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2730005,
            "range": "± 59571",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 150234,
            "range": "± 661",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 155569,
            "range": "± 870",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9418881,
            "range": "± 37011",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14036894,
            "range": "± 41799",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19058290,
            "range": "± 105394",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23743456,
            "range": "± 50630",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36972135,
            "range": "± 106890",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 37467611,
            "range": "± 73428",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 42956959,
            "range": "± 249714",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 130452,
            "range": "± 2713",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 128696,
            "range": "± 897",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ymurenkov@yandex.ru",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "committer": {
            "email": "17390550+murenkov@users.noreply.github.com",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "distinct": true,
          "id": "834c1a195987324b67e0d7942b5635c0eed9de00",
          "message": "feat: add event detection (root-finding during integration)\n\nAdd event detection capability to the ODE solver, allowing users to\nmonitor zero-crossings of g(t, y) during integration.\n\n- New types: Event<T>, EventDirection, EventRecord\n- ODEProblem gains events field with with_events() builder\n- ODESolution gains events field with event records\n- Both solve() and solve_adaptive() check events after each step\n- Bisection root-finding locates precise crossing times\n- Terminal events stop integration early\n- Directional filtering (Any, Increasing, Decreasing)\n- SolverError::EventError for invalid event function values\n- 9 new tests covering terminal, non-terminal, directional,\n  no-crossing, multiple events, and adaptive solver cases\n\nPerformance: event branch is guarded by prob.events.is_empty(),\nso the no-events fast path has zero overhead (no clones, no\nextra allocations).",
          "timestamp": "2026-05-31T17:07:20+03:00",
          "tree_id": "479e9736626839bef60e3d1dd5892b83609cbc64",
          "url": "https://github.com/murenkov/raznoor.rs/commit/834c1a195987324b67e0d7942b5635c0eed9de00"
        },
        "date": 1780237049808,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5754,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6212,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60311,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60060,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8470,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8418,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82183,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 82047,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11239,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11234,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 110018,
            "range": "± 976",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 108767,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13393,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13419,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 131677,
            "range": "± 10276",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 130166,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20150,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19483,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 196733,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 193117,
            "range": "± 18505",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20246,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 19851,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 199163,
            "range": "± 1264",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 195001,
            "range": "± 1524",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 23541,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 23045,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 231890,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 227656,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5919,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38793,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6062,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39554,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 760457,
            "range": "± 1827",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 957322,
            "range": "± 7243",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1254569,
            "range": "± 16916",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1517034,
            "range": "± 18462",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2289725,
            "range": "± 88767",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2332392,
            "range": "± 6855",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2734148,
            "range": "± 5562",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 148211,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 151894,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9625989,
            "range": "± 68865",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13962801,
            "range": "± 120209",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19171651,
            "range": "± 454726",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23508641,
            "range": "± 572554",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 35647465,
            "range": "± 676752",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36129353,
            "range": "± 630854",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43518615,
            "range": "± 739376",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 130516,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 129066,
            "range": "± 1476",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "committer": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "id": "dc706bec4c08a682a6db66655d68f2bae6436134",
          "message": "refactor: remove T: Float type bounds from ODEProblem",
          "timestamp": "2026-05-31T14:07:25Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/53/commits/dc706bec4c08a682a6db66655d68f2bae6436134"
        },
        "date": 1780238234457,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5843,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6369,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60397,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 61129,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8463,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8643,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 81947,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 82959,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11014,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11062,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 107305,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 107660,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13263,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13404,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 129756,
            "range": "± 3186",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 130712,
            "range": "± 1606",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19703,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19872,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 193570,
            "range": "± 5690",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 195714,
            "range": "± 833",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 19934,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20288,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 195412,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 199653,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 23189,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 23456,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 227665,
            "range": "± 2071",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 230376,
            "range": "± 1115",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5826,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 37989,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6023,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38348,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 698101,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 957979,
            "range": "± 1867",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1253232,
            "range": "± 7614",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1511740,
            "range": "± 10639",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2299264,
            "range": "± 16051",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2348649,
            "range": "± 6883",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2779307,
            "range": "± 13645",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 146571,
            "range": "± 2724",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 150095,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 8940718,
            "range": "± 26485",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13588272,
            "range": "± 57065",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 18594780,
            "range": "± 43952",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23422661,
            "range": "± 53357",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 35266481,
            "range": "± 221948",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 35777027,
            "range": "± 624982",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 41581232,
            "range": "± 93491",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 129768,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 130819,
            "range": "± 1251",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ymurenkov@yandex.ru",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "committer": {
            "email": "17390550+murenkov@users.noreply.github.com",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "distinct": true,
          "id": "7323e5c17928697b9dc9db63fe343dadc3912a86",
          "message": "refactor: remove T: Float type bounds from ODEProblem\n\nRemove the legacy T: Float trait bound from ODEProblem struct and\nits impl block. The Float constraint was unnecessarily restrictive;\nusers should be free to use any type that satisfies the numeric\nrequirements of the methods they call. The unused num_traits::Float\nimport was also cleaned up.",
          "timestamp": "2026-05-31T17:38:11+03:00",
          "tree_id": "77ffce766fa6672aa29d02137a5549682fd48270",
          "url": "https://github.com/murenkov/raznoor.rs/commit/7323e5c17928697b9dc9db63fe343dadc3912a86"
        },
        "date": 1780238898074,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5750,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6230,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60014,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 59993,
            "range": "± 797",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8484,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8368,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82219,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 81778,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11042,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10911,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 107563,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 106601,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13312,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13168,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 130431,
            "range": "± 1523",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 129512,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19888,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19658,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 195485,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 193931,
            "range": "± 3962",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20116,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20084,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 198636,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 196153,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 23466,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 23802,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 232249,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 234134,
            "range": "± 919",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5912,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38309,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6062,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39517,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 695259,
            "range": "± 1343",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 952338,
            "range": "± 6397",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1254224,
            "range": "± 18175",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1518342,
            "range": "± 20952",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2288994,
            "range": "± 4875",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2331356,
            "range": "± 63510",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2723618,
            "range": "± 12026",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 147891,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 151323,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9325257,
            "range": "± 25254",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14908269,
            "range": "± 115693",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 20087989,
            "range": "± 456776",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 25226690,
            "range": "± 171029",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36225557,
            "range": "± 904581",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36434834,
            "range": "± 148608",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43101444,
            "range": "± 76469",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 130724,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 129231,
            "range": "± 289",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "committer": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "id": "c5c0452a8e765b9d85b38d7b0270a49a30d72809",
          "message": "chore: rename project from raznur to raznoor",
          "timestamp": "2026-05-31T14:38:15Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/54/commits/c5c0452a8e765b9d85b38d7b0270a49a30d72809"
        },
        "date": 1780239652476,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5762,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6211,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60063,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 59658,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8468,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8352,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82225,
            "range": "± 2131",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 81315,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 10962,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10849,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 106999,
            "range": "± 653",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 106248,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13438,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13157,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 131743,
            "range": "± 686",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 128630,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19847,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19514,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 195444,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 192478,
            "range": "± 1635",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20128,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20268,
            "range": "± 576",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 198502,
            "range": "± 1027",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 194411,
            "range": "± 4888",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 23551,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 23061,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 232191,
            "range": "± 2519",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 227618,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5932,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38225,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6093,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38651,
            "range": "± 806",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 692074,
            "range": "± 4005",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 950588,
            "range": "± 5364",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1248187,
            "range": "± 23432",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1508136,
            "range": "± 34206",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2266813,
            "range": "± 5422",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2305594,
            "range": "± 5627",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2699304,
            "range": "± 26099",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 147193,
            "range": "± 3226",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 150338,
            "range": "± 17011",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9421151,
            "range": "± 178808",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13895508,
            "range": "± 305438",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 18938895,
            "range": "± 489980",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23576543,
            "range": "± 115278",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 35851272,
            "range": "± 481401",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36092185,
            "range": "± 239372",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 42267432,
            "range": "± 737146",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 131014,
            "range": "± 1407",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 128965,
            "range": "± 2464",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "committer": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "id": "9be11e5d4eb5bdb4bd9bc73f6212394ad769757a",
          "message": "chore: rename project from raznur to raznoor",
          "timestamp": "2026-05-31T14:38:15Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/54/commits/9be11e5d4eb5bdb4bd9bc73f6212394ad769757a"
        },
        "date": 1780240162138,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5763,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6200,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60119,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 59779,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8477,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8358,
            "range": "± 802",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82399,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 81693,
            "range": "± 1242",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11038,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10943,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 107647,
            "range": "± 1808",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 107250,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13376,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13211,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 131085,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 129500,
            "range": "± 826",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19900,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19756,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 195829,
            "range": "± 1878",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 194956,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20163,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20075,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 198231,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 197619,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 23508,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 23066,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 231865,
            "range": "± 4203",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 227301,
            "range": "± 679",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5924,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38209,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6078,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38888,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 692784,
            "range": "± 1893",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 961132,
            "range": "± 4548",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1248482,
            "range": "± 12803",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1507121,
            "range": "± 5840",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2270818,
            "range": "± 11583",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2329917,
            "range": "± 78757",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2701899,
            "range": "± 11614",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 147402,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 150631,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 10190071,
            "range": "± 273579",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13666343,
            "range": "± 46150",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19151405,
            "range": "± 94689",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23864200,
            "range": "± 95382",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36356527,
            "range": "± 381464",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36926181,
            "range": "± 554845",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43031398,
            "range": "± 207859",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 130598,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 128913,
            "range": "± 2441",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ymurenkov@yandex.ru",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "committer": {
            "email": "17390550+murenkov@users.noreply.github.com",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "distinct": true,
          "id": "aa7d1dfbc25dcfedf5220990e3152bf85a2b0efa",
          "message": "chore: rename project from raznur to raznoor\n\nUpdate all references to the project name across the codebase, including Cargo.toml, Cargo.lock, README.md, src/ files, and benches/.",
          "timestamp": "2026-05-31T18:00:49+03:00",
          "tree_id": "391ed0958f063f98ab1c3398aa410723cc093086",
          "url": "https://github.com/murenkov/raznoor.rs/commit/aa7d1dfbc25dcfedf5220990e3152bf85a2b0efa"
        },
        "date": 1780240260401,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5797,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6200,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 59993,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 59721,
            "range": "± 1148",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8451,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8341,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82119,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 81453,
            "range": "± 6334",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 10956,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10836,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 107128,
            "range": "± 2682",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 106342,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13328,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13190,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 130698,
            "range": "± 5388",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 128991,
            "range": "± 8326",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19978,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19506,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 195208,
            "range": "± 625",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 192179,
            "range": "± 703",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20108,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 19772,
            "range": "± 844",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 197978,
            "range": "± 4702",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 194887,
            "range": "± 3574",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 23517,
            "range": "± 1424",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 23042,
            "range": "± 2517",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 231745,
            "range": "± 2392",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 226736,
            "range": "± 4063",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5888,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38232,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6061,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39065,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 692925,
            "range": "± 9857",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 952555,
            "range": "± 7550",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1247435,
            "range": "± 27944",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1505844,
            "range": "± 52468",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2269126,
            "range": "± 3908",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2310410,
            "range": "± 10477",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2695842,
            "range": "± 7862",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 147444,
            "range": "± 2698",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 150668,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9312872,
            "range": "± 366878",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13744121,
            "range": "± 136307",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 18871818,
            "range": "± 72453",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23520822,
            "range": "± 675244",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 35828811,
            "range": "± 580607",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36159223,
            "range": "± 110654",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 42378327,
            "range": "± 76041",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 130659,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 128889,
            "range": "± 1933",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "committer": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "id": "4ba2c7d26cbd348bacaf1586ccdccdd50a9e5d36",
          "message": "chore: bump version to 0.2.0",
          "timestamp": "2026-05-31T15:00:54Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/55/commits/4ba2c7d26cbd348bacaf1586ccdccdd50a9e5d36"
        },
        "date": 1780240297643,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5853,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6368,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60564,
            "range": "± 1517",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 61310,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8389,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8559,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 81250,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 82936,
            "range": "± 1779",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 10852,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11019,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 105746,
            "range": "± 2148",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 107972,
            "range": "± 2540",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13132,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13412,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 128309,
            "range": "± 2764",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 131126,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19634,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19964,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 192801,
            "range": "± 1108",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 197258,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 19917,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20264,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 195468,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 199702,
            "range": "± 3435",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 23095,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 23616,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 227107,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 234177,
            "range": "± 3019",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5809,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38738,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 5963,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38989,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 698350,
            "range": "± 1275",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 959439,
            "range": "± 1947",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1254346,
            "range": "± 12649",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1514289,
            "range": "± 22451",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2331597,
            "range": "± 8169",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2378470,
            "range": "± 16185",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2759995,
            "range": "± 9007",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 153663,
            "range": "± 1598",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 156685,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9081209,
            "range": "± 23441",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13781550,
            "range": "± 50601",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 18782513,
            "range": "± 439804",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23574906,
            "range": "± 153403",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 39304856,
            "range": "± 174368",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 39782393,
            "range": "± 203503",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 48471285,
            "range": "± 208318",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 128852,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 130770,
            "range": "± 2306",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ymurenkov@yandex.ru",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "committer": {
            "email": "17390550+murenkov@users.noreply.github.com",
            "name": "Yaroslav Murenkov",
            "username": "murenkov"
          },
          "distinct": true,
          "id": "b6e1fee3b9ba77ccfca172a212801937c523710b",
          "message": "chore: bump version to 0.2.0\n\nUpdate raznur crate version from 0.1.0 to 0.2.0, reflecting\nthe integration of systems of ODEs, additional Runge-Kutta\nmethods, adaptive integration support, and Butcher tableau\nrefactoring.",
          "timestamp": "2026-05-31T18:03:52+03:00",
          "tree_id": "40b704d7c6d5431615aba5f9ac793927bdc57005",
          "url": "https://github.com/murenkov/raznoor.rs/commit/b6e1fee3b9ba77ccfca172a212801937c523710b"
        },
        "date": 1780240437879,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5808,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6196,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60574,
            "range": "± 1454",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60071,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8451,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8372,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82174,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 81743,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11079,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10871,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 107351,
            "range": "± 2138",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 106656,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13308,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13175,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 130139,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 128949,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19850,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19509,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 195369,
            "range": "± 980",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 192059,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20105,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 19772,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 198328,
            "range": "± 898",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 194423,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 23602,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 22994,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 232782,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 228444,
            "range": "± 1238",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5940,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38307,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6096,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 40083,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 693081,
            "range": "± 5804",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 953958,
            "range": "± 14220",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1253684,
            "range": "± 9044",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1510040,
            "range": "± 113400",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2287709,
            "range": "± 4839",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2324357,
            "range": "± 4510",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2724727,
            "range": "± 7030",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 148107,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 152038,
            "range": "± 1941",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9304380,
            "range": "± 26780",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13764296,
            "range": "± 27271",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 18803669,
            "range": "± 29712",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23427887,
            "range": "± 77529",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 35735803,
            "range": "± 342643",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36079928,
            "range": "± 89746",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 42072296,
            "range": "± 71115",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 130533,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 129500,
            "range": "± 276",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "committer": {
            "name": "murenkov",
            "username": "murenkov"
          },
          "id": "695d2b5f3aa074fcb2543ab13ca41c9239723090",
          "message": "fix: add missing description and license fields to Cargo.toml",
          "timestamp": "2026-05-31T15:03:57Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/56/commits/695d2b5f3aa074fcb2543ab13ca41c9239723090"
        },
        "date": 1780240954275,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5774,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6189,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60072,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 59687,
            "range": "± 8325",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8419,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8383,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82028,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 81590,
            "range": "± 604",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 10988,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10856,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 107480,
            "range": "± 1649",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 106733,
            "range": "± 1535",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13294,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13148,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 130213,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 128921,
            "range": "± 1915",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 19814,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19515,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 195501,
            "range": "± 744",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 192009,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20086,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 19723,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 198070,
            "range": "± 1189",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 194239,
            "range": "± 7517",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 23391,
            "range": "± 729",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 22932,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 230773,
            "range": "± 1261",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 226385,
            "range": "± 582",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5963,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38010,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6083,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38612,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 692202,
            "range": "± 18630",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 950991,
            "range": "± 4509",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1250840,
            "range": "± 15514",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1511825,
            "range": "± 22933",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2270546,
            "range": "± 7498",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2310212,
            "range": "± 11445",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2736643,
            "range": "± 12062",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 148378,
            "range": "± 2780",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 152234,
            "range": "± 2855",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9303313,
            "range": "± 26013",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13722005,
            "range": "± 34325",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 18868845,
            "range": "± 339398",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23558735,
            "range": "± 152106",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 35899952,
            "range": "± 100150",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36210636,
            "range": "± 142649",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 42417339,
            "range": "± 230740",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 130317,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 128791,
            "range": "± 304",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}