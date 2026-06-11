window.BENCHMARK_DATA = {
  "lastUpdate": 1781176364672,
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
          "id": "8f91b94274da6a33c137e9a0f6e13d74e32cacd3",
          "message": "fix: add missing description and license fields to Cargo.toml\n\nThe cargo publish command requires both description and license\nmetadata fields. Without them the registry returns a 400 error:\n\n  missing or empty metadata fields: description, license\n\nAdding these fields resolves the publishing failure.",
          "timestamp": "2026-05-31T18:12:42+03:00",
          "tree_id": "af56d3f665856b6301cc3c7722bb2d3e30ca359c",
          "url": "https://github.com/murenkov/raznoor.rs/commit/8f91b94274da6a33c137e9a0f6e13d74e32cacd3"
        },
        "date": 1780240985105,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 6403,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6885,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 71830,
            "range": "± 2730",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 71486,
            "range": "± 3903",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 9443,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 9452,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 92440,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 90714,
            "range": "± 2375",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 12055,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11914,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 118282,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 117559,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 14441,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 14340,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 142851,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 140942,
            "range": "± 3142",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 21344,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 21622,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 210735,
            "range": "± 3270",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 209088,
            "range": "± 1774",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21682,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 21465,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 214174,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 212861,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 25130,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 25010,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 248577,
            "range": "± 686",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 247286,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5955,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 52239,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6141,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39958,
            "range": "± 3696",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 692724,
            "range": "± 13670",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 951234,
            "range": "± 1396",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1254253,
            "range": "± 8136",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1520110,
            "range": "± 23845",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2332576,
            "range": "± 4766",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2323309,
            "range": "± 5227",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2770226,
            "range": "± 6191",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 153340,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 157154,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9454614,
            "range": "± 30739",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14039069,
            "range": "± 48909",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 18983771,
            "range": "± 45890",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23674736,
            "range": "± 514242",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 35902216,
            "range": "± 1818428",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36278443,
            "range": "± 62669",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 42367940,
            "range": "± 472054",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 142037,
            "range": "± 1666",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 142806,
            "range": "± 479",
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
          "id": "099762ff64ba2e5308b01e25fd8b7290c569d789",
          "message": "refactor: consolidate solver infrastructure args into StepperContext struct",
          "timestamp": "2026-05-31T15:12:47Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/57/commits/099762ff64ba2e5308b01e25fd8b7290c569d789"
        },
        "date": 1780263438526,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5930,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6432,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 61965,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60773,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8885,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8792,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 86180,
            "range": "± 798",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 85074,
            "range": "± 1774",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11638,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11631,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 113424,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 114042,
            "range": "± 1264",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 14173,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 14114,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 138689,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 137012,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 21096,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 21468,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 208057,
            "range": "± 966",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 211250,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21473,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 21848,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 211564,
            "range": "± 1718",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 216139,
            "range": "± 1332",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 25398,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 25826,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 250334,
            "range": "± 1234",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 259105,
            "range": "± 772",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6106,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 40308,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6316,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 41694,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 704567,
            "range": "± 3265",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 974262,
            "range": "± 4118",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1291993,
            "range": "± 34340",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1572980,
            "range": "± 24952",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2432303,
            "range": "± 17826",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2481136,
            "range": "± 10331",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2946513,
            "range": "± 20600",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 152437,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 158666,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9107644,
            "range": "± 40231",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13909906,
            "range": "± 43389",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19057255,
            "range": "± 159215",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24253633,
            "range": "± 81136",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36481917,
            "range": "± 237910",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36865726,
            "range": "± 50359",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43425030,
            "range": "± 118258",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 138615,
            "range": "± 806",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 138225,
            "range": "± 796",
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
          "id": "07375763e03ed2b90677b690ef01c040101209ac",
          "message": "refactor: consolidate solver infrastructure args into StepperContext struct\n\nExtract the four shared solver infrastructure parameters (method, f, ks,\narg) into a StepperContext struct to eliminate clippy::too_many_arguments\nsuppressions on bisect_event and detect_events.\n\nThe struct bundles: the Runge-Kutta method table, the ODE right-hand side\nfunction, and the mutable working buffers (stages ks and scratch arg).\nThis reduces:\n  - bisect_event from 9 to 6 arguments\n  - detect_events from 9 to 6 arguments\n  - advance from 7 to 4 arguments\n  - compute_stages from 7 to 4 arguments\n\nBoth #[allow(clippy::too_many_arguments)] attributes are removed.",
          "timestamp": "2026-06-01T00:37:55+03:00",
          "tree_id": "7de0418abe60e25a92036e73ebf3a724a3385ef0",
          "url": "https://github.com/murenkov/raznoor.rs/commit/07375763e03ed2b90677b690ef01c040101209ac"
        },
        "date": 1780264085880,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5932,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6336,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 61994,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60839,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8887,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8725,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 86369,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 85008,
            "range": "± 4762",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11655,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11323,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 112466,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 110708,
            "range": "± 1107",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 14164,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13773,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 138427,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 134624,
            "range": "± 1527",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 21081,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20924,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 208680,
            "range": "± 1004",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 207854,
            "range": "± 2610",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21367,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 21632,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 210485,
            "range": "± 4694",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 212100,
            "range": "± 1958",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 25207,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 25386,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 248516,
            "range": "± 3843",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 249055,
            "range": "± 2963",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6106,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39328,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6314,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 40458,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 704645,
            "range": "± 6648",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 976435,
            "range": "± 98296",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1292308,
            "range": "± 22738",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1572210,
            "range": "± 21523",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2432750,
            "range": "± 13543",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2481515,
            "range": "± 28962",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2945365,
            "range": "± 6314",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 152308,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 157378,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9457866,
            "range": "± 27720",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14329756,
            "range": "± 146441",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19622588,
            "range": "± 43402",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24735464,
            "range": "± 109655",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 38977746,
            "range": "± 187721",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 39278724,
            "range": "± 287590",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 46290769,
            "range": "± 192294",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 138473,
            "range": "± 1871",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 136921,
            "range": "± 1303",
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
          "id": "a07339f1ee61ce8d7f45bd4a1f0e22505787f77b",
          "message": "refactor: group detect_events parameters into StepState pairs",
          "timestamp": "2026-05-31T21:37:59Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/58/commits/a07339f1ee61ce8d7f45bd4a1f0e22505787f77b"
        },
        "date": 1780264744961,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5733,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6264,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 61379,
            "range": "± 1124",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 61642,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8505,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8517,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82901,
            "range": "± 4048",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 82944,
            "range": "± 2143",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11196,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11153,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109418,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 109559,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13890,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13902,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 135313,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 137176,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20734,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20549,
            "range": "± 678",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 204331,
            "range": "± 3190",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 201643,
            "range": "± 3440",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20945,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20668,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 206818,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 204047,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 26087,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 25952,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 243541,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 240231,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6126,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39168,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6266,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39759,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 697577,
            "range": "± 1524",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 961186,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1273580,
            "range": "± 20414",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1550968,
            "range": "± 33262",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2370768,
            "range": "± 3856",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2398876,
            "range": "± 4740",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2815960,
            "range": "± 14354",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 151305,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 155179,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9291904,
            "range": "± 15645",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13989012,
            "range": "± 27722",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19288369,
            "range": "± 137165",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24292720,
            "range": "± 44644",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 37201895,
            "range": "± 489780",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 37466093,
            "range": "± 579710",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 45158342,
            "range": "± 1082397",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134890,
            "range": "± 596",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 133940,
            "range": "± 371",
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
          "id": "bea0ad5b030974f1d924a3995197fd2ffa894b0c",
          "message": "refactor: group detect_events parameters into StepState pairs\n\nReplace the four individual parameters t_prev, t_curr, y_prev, y_curr with\ntwo StepState references prev and curr. StepState bundles (t, y) as a\nsingle state, which is more natural since event functions operate on\na state (t, y) and callers already hold prev/curr state pairs.",
          "timestamp": "2026-06-01T01:00:13+03:00",
          "tree_id": "06e5b0093134ad9befc789030d7522f1422ec2a8",
          "url": "https://github.com/murenkov/raznoor.rs/commit/bea0ad5b030974f1d924a3995197fd2ffa894b0c"
        },
        "date": 1780265420819,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5819,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6321,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 59907,
            "range": "± 1455",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60867,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8532,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8735,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82597,
            "range": "± 1986",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 86324,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11218,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11303,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109673,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 111159,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13783,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 14094,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134736,
            "range": "± 1684",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 135534,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20814,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 21525,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 205118,
            "range": "± 1638",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 212323,
            "range": "± 1014",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21096,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 21885,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 208348,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 216318,
            "range": "± 8227",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 25146,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 25737,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 247730,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 252537,
            "range": "± 1292",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6286,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 40221,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6501,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 41221,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 702236,
            "range": "± 4104",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 970791,
            "range": "± 3857",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1284531,
            "range": "± 19872",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1565599,
            "range": "± 7742",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2416710,
            "range": "± 8635",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2468425,
            "range": "± 7050",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2905986,
            "range": "± 23229",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 151494,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 156497,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9013027,
            "range": "± 29186",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13805543,
            "range": "± 39294",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19027711,
            "range": "± 155550",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24043085,
            "range": "± 212085",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36491587,
            "range": "± 288228",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36798359,
            "range": "± 88231",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43209354,
            "range": "± 126459",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134900,
            "range": "± 631",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 136952,
            "range": "± 1040",
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
          "id": "06e27c3e85e4bfc1450042961ebcec2a504d70a7",
          "message": "refactor!: unify terminology across the codebase",
          "timestamp": "2026-05-31T22:00:19Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/59/commits/06e27c3e85e4bfc1450042961ebcec2a504d70a7"
        },
        "date": 1780266168853,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 4446,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 4823,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 46352,
            "range": "± 796",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 46681,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 6591,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 6568,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 64127,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 64131,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 9161,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 9078,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 89851,
            "range": "± 1591",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 89021,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 10692,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 10732,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 104903,
            "range": "± 3067",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 105843,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 17194,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 16911,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 170155,
            "range": "± 1119",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 166975,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 17391,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 17126,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 171940,
            "range": "± 885",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 169266,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 19239,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 18862,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 188617,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 185603,
            "range": "± 2715",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5066,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 32125,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 4858,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 31064,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 542439,
            "range": "± 5484",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 742269,
            "range": "± 9752",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1027258,
            "range": "± 21796",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1204247,
            "range": "± 9447",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 1938464,
            "range": "± 37422",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 1967573,
            "range": "± 2916",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2184928,
            "range": "± 2878",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 124101,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 120413,
            "range": "± 2461",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 7205305,
            "range": "± 12300",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 10844768,
            "range": "± 273440",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 14987547,
            "range": "± 32035",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 18835911,
            "range": "± 68130",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 29037003,
            "range": "± 91574",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 29398530,
            "range": "± 169230",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 34408307,
            "range": "± 840947",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 104325,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 103701,
            "range": "± 1656",
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
          "id": "4460fc005537b2c4123dce03adf587f7c65c22fd",
          "message": "refactor!: unify terminology across the codebase\n\nRename variables to establish consistent naming conventions:\n- `t` for the independent variable (time)\n- `u` for the dependent variable (state vector and its derivatives)\n- `dt` for the step size\n\nChanges:\n- Rename `EventRecord.y` → `EventRecord.u` (public field, breaking)\n- Rename `StepState.y` → `StepState.u`\n- Rename internal state vector `y` → `u_curr` / `u_new`\n- Rename step size `h` → `dt` (internal) and `h0` → `dt` in `solve_adaptive`\n- Rename time grid `xs` → `ts` in `solve()` to match `solve_adaptive()`\n- Rename `update` → `du` (weighted sum of stage derivatives)\n- Rename `err_diff` → `delta` (error estimation difference)\n- Update all doc examples and tests to use `t`/`u` callback parameter names",
          "timestamp": "2026-06-01T01:24:14+03:00",
          "tree_id": "b101c4b24d945c81dbab5017cea20c4b1ab53d95",
          "url": "https://github.com/murenkov/raznoor.rs/commit/4460fc005537b2c4123dce03adf587f7c65c22fd"
        },
        "date": 1780266861786,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5803,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6306,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60223,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60927,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8524,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8732,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83016,
            "range": "± 2093",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 84761,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11178,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11336,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109330,
            "range": "± 3732",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 110724,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13664,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 14087,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134787,
            "range": "± 2460",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 135275,
            "range": "± 810",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20784,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 21593,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 206322,
            "range": "± 1562",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 212387,
            "range": "± 6419",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21173,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 21915,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 210213,
            "range": "± 1976",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 215997,
            "range": "± 919",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24904,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 25596,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 249089,
            "range": "± 1918",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 251632,
            "range": "± 1261",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6116,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 40057,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6346,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 41044,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 702052,
            "range": "± 3159",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 971084,
            "range": "± 2478",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1283080,
            "range": "± 17966",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1564753,
            "range": "± 20058",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2410796,
            "range": "± 6724",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2460716,
            "range": "± 6529",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2912540,
            "range": "± 54508",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 150239,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 157141,
            "range": "± 1606",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 8884778,
            "range": "± 501230",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13695973,
            "range": "± 35312",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 18933455,
            "range": "± 61571",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23896922,
            "range": "± 122576",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36187350,
            "range": "± 116920",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36567670,
            "range": "± 124608",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 42965045,
            "range": "± 149523",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134659,
            "range": "± 781",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 135398,
            "range": "± 676",
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
          "id": "9822b479e65eabbd1fe8211425a96e5de1f85e76",
          "message": "refactor: move linter and docs settings from src/lib.rs to Cargo.toml",
          "timestamp": "2026-05-31T22:24:18Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/60/commits/9822b479e65eabbd1fe8211425a96e5de1f85e76"
        },
        "date": 1780389902909,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5728,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6227,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 59751,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60132,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8525,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8462,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82729,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 82562,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11179,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11079,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109267,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 108726,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13768,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13683,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134845,
            "range": "± 7090",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 133727,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20670,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20406,
            "range": "± 967",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 203814,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 201571,
            "range": "± 676",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20917,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20655,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 206342,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 203179,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24569,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24157,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 242614,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 237425,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6150,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39104,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6334,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39785,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 697346,
            "range": "± 8728",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 959520,
            "range": "± 21979",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1269920,
            "range": "± 25678",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1549216,
            "range": "± 9218",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2359128,
            "range": "± 5270",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2400766,
            "range": "± 7666",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2811591,
            "range": "± 7517",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 150634,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 154863,
            "range": "± 999",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9276982,
            "range": "± 30289",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13940076,
            "range": "± 30083",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19183138,
            "range": "± 79857",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24198238,
            "range": "± 314155",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36983646,
            "range": "± 66158",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 37433591,
            "range": "± 149880",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 44307125,
            "range": "± 67239",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134678,
            "range": "± 2337",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 133603,
            "range": "± 724",
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
          "id": "e228fc9c1f963d5fd4c8e1d17223ad1af4983d40",
          "message": "refactor: move linter and docs settings from src/lib.rs to Cargo.toml\n\nMove #![deny(missing_docs)], #![deny(clippy::all)], and\n#![deny(clippy::pedantic)] from the crate root attributes in src/lib.rs\nto the [lints] table in Cargo.toml.\n\nThis is the idiomatic way to configure lint levels in modern Rust\n(supported since Rust 1.74) and keeps source code free of tooling\nconfiguration.\n\nAdd #![allow(missing_docs, clippy::all, clippy::pedantic)] to the\nbench crate root to suppress lints that are now configured globally\nvia [lints] in Cargo.toml.\n\nFix a pre-existing clippy::cast_lossless warning in test code that\nwas exposed once [lints] applied to all targets uniformly.",
          "timestamp": "2026-06-02T11:58:15+03:00",
          "tree_id": "86be0110e7f45d0b3187cf61d014a72b625fe15b",
          "url": "https://github.com/murenkov/raznoor.rs/commit/e228fc9c1f963d5fd4c8e1d17223ad1af4983d40"
        },
        "date": 1780391310687,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5722,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6305,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 59793,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60469,
            "range": "± 869",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8523,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8557,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82693,
            "range": "± 736",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 83213,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11201,
            "range": "± 631",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11122,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109382,
            "range": "± 1814",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 110261,
            "range": "± 3612",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13758,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13748,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134681,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 134097,
            "range": "± 4051",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20692,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20585,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 205710,
            "range": "± 3738",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 204571,
            "range": "± 7911",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20991,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20798,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 208071,
            "range": "± 3940",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 205826,
            "range": "± 13988",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24848,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24396,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 243591,
            "range": "± 4003",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 240156,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6166,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39248,
            "range": "± 816",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6312,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 40141,
            "range": "± 980",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 701465,
            "range": "± 1871",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 961794,
            "range": "± 1286",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1282597,
            "range": "± 17519",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1554683,
            "range": "± 12278",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2364769,
            "range": "± 16910",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2409404,
            "range": "± 5904",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2873303,
            "range": "± 27131",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 151471,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 156645,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9302819,
            "range": "± 162653",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14154435,
            "range": "± 295489",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19395483,
            "range": "± 173612",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24373672,
            "range": "± 306111",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 37105417,
            "range": "± 459290",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 37383952,
            "range": "± 338435",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 44092364,
            "range": "± 77942",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134990,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 134535,
            "range": "± 749",
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
          "id": "ef7901432acf6e69d9272eed47536a453846f92b",
          "message": "feat: add ODESolver trait with FixedStepODESolver and AdaptiveODESolver",
          "timestamp": "2026-06-02T08:58:20Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/61/commits/ef7901432acf6e69d9272eed47536a453846f92b"
        },
        "date": 1781087493347,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 6013,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6312,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 61246,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60665,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8604,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8475,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83384,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 82729,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11209,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11031,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109368,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 108007,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13717,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13530,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134177,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 132202,
            "range": "± 6418",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20487,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20207,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 201579,
            "range": "± 2331",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 200141,
            "range": "± 5805",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20768,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20457,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 204389,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 201308,
            "range": "± 788",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24348,
            "range": "± 973",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24339,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 239493,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 236080,
            "range": "± 1700",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5958,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38429,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6184,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38981,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 702504,
            "range": "± 3758",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 968456,
            "range": "± 21627",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1271096,
            "range": "± 22440",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1554605,
            "range": "± 21429",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2375785,
            "range": "± 8782",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2420089,
            "range": "± 10970",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2830268,
            "range": "± 24660",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 148485,
            "range": "± 635",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 153005,
            "range": "± 1691",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 8965702,
            "range": "± 42916",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13787244,
            "range": "± 165076",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19023084,
            "range": "± 56964",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24022772,
            "range": "± 122369",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36374951,
            "range": "± 80882",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36680219,
            "range": "± 122058",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 42888259,
            "range": "± 151158",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134341,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 132303,
            "range": "± 864",
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
          "id": "bfb326a980a0c6844203abf78646a56261baac8a",
          "message": "feat: add ODESolver trait with FixedStepODESolver and AdaptiveODESolver\n\nIntroduce the ODESolver trait that separates solver configuration\nfrom problem definition. The existing solve and solve_adaptive free\nfunctions become thin wrappers delegating to trait implementations.\n\n- ODESolver trait with a single solve method and doc errors section\n- FixedStepODESolver: wraps a Runge-Kutta method and fixed step size\n- AdaptiveODESolver: wraps embedded RK pair, dt, atol, rtol\n- Backward compatible: all existing public API signatures unchanged",
          "timestamp": "2026-06-10T13:33:39+03:00",
          "tree_id": "ed8157c2f850a8c3f00c987e07e10aeff8f22774",
          "url": "https://github.com/murenkov/raznoor.rs/commit/bfb326a980a0c6844203abf78646a56261baac8a"
        },
        "date": 1781088229992,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 6021,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6289,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60778,
            "range": "± 3270",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60436,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8617,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8543,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83476,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 82726,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11213,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11031,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109521,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 108114,
            "range": "± 1520",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13727,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13550,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134286,
            "range": "± 963",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 132259,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20498,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20309,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 201685,
            "range": "± 798",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 198413,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20782,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20752,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 204818,
            "range": "± 5717",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 203058,
            "range": "± 8941",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24336,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24525,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 239552,
            "range": "± 848",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 240780,
            "range": "± 2908",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 5982,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38635,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6177,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39620,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 702136,
            "range": "± 1909",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 968969,
            "range": "± 3235",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1272901,
            "range": "± 43278",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1555762,
            "range": "± 25700",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2378340,
            "range": "± 6513",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2436975,
            "range": "± 71985",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2867517,
            "range": "± 6704",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 150733,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 155503,
            "range": "± 591",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9088875,
            "range": "± 50356",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14147692,
            "range": "± 211239",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19115851,
            "range": "± 103117",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24396423,
            "range": "± 146983",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 37762299,
            "range": "± 277223",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 38165552,
            "range": "± 737865",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 44150464,
            "range": "± 1091933",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134522,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 132430,
            "range": "± 747",
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
          "id": "06f34a5b6df48155dcd6ea55cd6aab328c30aa40",
          "message": "refactor(api)!: move dt validation to struct creation and seal fields",
          "timestamp": "2026-06-10T10:33:45Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/62/commits/06f34a5b6df48155dcd6ea55cd6aab328c30aa40"
        },
        "date": 1781089148359,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 4445,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 4844,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 46830,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 46805,
            "range": "± 827",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 6624,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 6638,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 64290,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 64449,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 8696,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 8627,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 84901,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 84617,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 10633,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 10596,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 104215,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 103702,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 16025,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 15841,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 157897,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 157745,
            "range": "± 2543",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 16465,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 16239,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 162511,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 160862,
            "range": "± 2337",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 18991,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 18849,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 187412,
            "range": "± 1073",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 185830,
            "range": "± 3235",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 4792,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 30712,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 4943,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 31069,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 543171,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 744743,
            "range": "± 5542",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 987136,
            "range": "± 19424",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1204318,
            "range": "± 13152",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 1845758,
            "range": "± 7132",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 1883693,
            "range": "± 31034",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2210100,
            "range": "± 39417",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 118157,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 121078,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 7213520,
            "range": "± 21391",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 10929729,
            "range": "± 79700",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 15061622,
            "range": "± 229906",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 18961579,
            "range": "± 271501",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 28701721,
            "range": "± 120772",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 29121240,
            "range": "± 122459",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 34149208,
            "range": "± 73756",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 104125,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 103820,
            "range": "± 186",
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
          "id": "0d94107a27fda6b8dd7674774c4be294b2e829b4",
          "message": "refactor(api)!: move dt validation to struct creation and seal fields\n\nMove step size validation from solve()/solve_adaptive() methods into\nFixedStepODESolver::new() and AdaptiveODESolver::new() constructors,\nreturning Result to catch invalid step sizes at construction time rather\nthan at solve time.\n\nMake all struct fields private so callers are forced to use the\nvalidating constructors. Add public getter methods for reading field\nvalues.",
          "timestamp": "2026-06-10T14:00:33+03:00",
          "tree_id": "11649d598be792c651b049a683c1690b2710a8ad",
          "url": "https://github.com/murenkov/raznoor.rs/commit/0d94107a27fda6b8dd7674774c4be294b2e829b4"
        },
        "date": 1781089844426,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5833,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6283,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60182,
            "range": "± 1438",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60329,
            "range": "± 2463",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8520,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8468,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82586,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 82593,
            "range": "± 4079",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11155,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11003,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 108797,
            "range": "± 5105",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 107642,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13647,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13473,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 133001,
            "range": "± 3169",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 131616,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20633,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20067,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 202503,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 197610,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21052,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20403,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 206023,
            "range": "± 3387",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 200367,
            "range": "± 702",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24901,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 23914,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 243570,
            "range": "± 1371",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 235592,
            "range": "± 658",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6046,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38196,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6277,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39038,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 706774,
            "range": "± 9183",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 972760,
            "range": "± 3970",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1282252,
            "range": "± 20320",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1570868,
            "range": "± 20074",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2411068,
            "range": "± 35513",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2445084,
            "range": "± 8986",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2889686,
            "range": "± 8431",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 155151,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 160379,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 8946311,
            "range": "± 288462",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13771133,
            "range": "± 51734",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 18995472,
            "range": "± 71154",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 23982487,
            "range": "± 50856",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36299388,
            "range": "± 85120",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36688139,
            "range": "± 177085",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43227795,
            "range": "± 1646657",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 133158,
            "range": "± 2002",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 131641,
            "range": "± 721",
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
          "id": "4b472e03ecab258b6e520113b59b117c588ff1f4",
          "message": "feat!: move u0 validation to struct creation",
          "timestamp": "2026-06-10T11:00:43Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/63/commits/4b472e03ecab258b6e520113b59b117c588ff1f4"
        },
        "date": 1781091370335,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5966,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6339,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 62765,
            "range": "± 2398",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60501,
            "range": "± 2394",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8525,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8483,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82909,
            "range": "± 1606",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 82823,
            "range": "± 6284",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11130,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11026,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 108559,
            "range": "± 8004",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 107775,
            "range": "± 1006",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13596,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13546,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 132932,
            "range": "± 2435",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 132400,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20328,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20259,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 199682,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 199717,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20581,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20739,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 203653,
            "range": "± 6803",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 203771,
            "range": "± 2687",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24087,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24392,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 237122,
            "range": "± 2253",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 236183,
            "range": "± 1998",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6002,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39110,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6193,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 40132,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 702787,
            "range": "± 9158",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 974354,
            "range": "± 3779",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1291192,
            "range": "± 8107",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1547810,
            "range": "± 17593",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2365581,
            "range": "± 16556",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2403753,
            "range": "± 12232",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2857410,
            "range": "± 37410",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 150068,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 154618,
            "range": "± 541",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 8999934,
            "range": "± 613710",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13811597,
            "range": "± 29294",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19012111,
            "range": "± 34103",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24059950,
            "range": "± 69847",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36500270,
            "range": "± 49141",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36819329,
            "range": "± 761678",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43105529,
            "range": "± 153766",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 132884,
            "range": "± 1321",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 132263,
            "range": "± 747",
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
          "id": "5d1065c7913ebead88fed9270c1000a383b9799d",
          "message": "feat!: move u0 validation to struct creation",
          "timestamp": "2026-06-10T14:36:33+03:00",
          "tree_id": "24033c294ebeddc3561dfa93871a6d279bd5637e",
          "url": "https://github.com/murenkov/raznoor.rs/commit/5d1065c7913ebead88fed9270c1000a383b9799d"
        },
        "date": 1781092016440,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5996,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6318,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60731,
            "range": "± 4394",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 73269,
            "range": "± 2688",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8555,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 11550,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 101129,
            "range": "± 1097",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 97747,
            "range": "± 938",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11221,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 13863,
            "range": "± 594",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 134073,
            "range": "± 1609",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 129341,
            "range": "± 4563",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 18817,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13552,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 158454,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 133158,
            "range": "± 5321",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 26238,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 22579,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 223656,
            "range": "± 1026",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 222294,
            "range": "± 1518",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20675,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20536,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 226921,
            "range": "± 3093",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 223551,
            "range": "± 2247",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24175,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24526,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 261368,
            "range": "± 2188",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 258466,
            "range": "± 2564",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6051,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39151,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6230,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 40007,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 706211,
            "range": "± 9774",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 976364,
            "range": "± 4460",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1291262,
            "range": "± 28393",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1575269,
            "range": "± 24299",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2373297,
            "range": "± 59370",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2464320,
            "range": "± 17470",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2912428,
            "range": "± 40571",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 152768,
            "range": "± 1155",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 155948,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9170804,
            "range": "± 39558",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14193220,
            "range": "± 46710",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19677777,
            "range": "± 46834",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 25029712,
            "range": "± 73706",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 37826670,
            "range": "± 99291",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 38170753,
            "range": "± 128054",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 44573256,
            "range": "± 123352",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 133523,
            "range": "± 1654",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 132620,
            "range": "± 452",
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
          "id": "8e179b92ecc94257fc318823f36f00472029c15a",
          "message": "refactor!: remove free solve and solve_adaptive functions",
          "timestamp": "2026-06-10T11:36:38Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/64/commits/8e179b92ecc94257fc318823f36f00472029c15a"
        },
        "date": 1781092806620,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5862,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6417,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 61434,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 61727,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8640,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8749,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83607,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 84706,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11314,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11693,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109806,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 111778,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13831,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 14129,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134566,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 136820,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 21309,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 21217,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 209986,
            "range": "± 2224",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 208024,
            "range": "± 2709",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21674,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 21679,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 210657,
            "range": "± 4169",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 213362,
            "range": "± 942",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 26133,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 25526,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 254645,
            "range": "± 961",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 251706,
            "range": "± 1599",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6266,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39932,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6461,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 40820,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 708101,
            "range": "± 5910",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 972198,
            "range": "± 9192",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1283458,
            "range": "± 23161",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1566161,
            "range": "± 9185",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2411425,
            "range": "± 11963",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2460021,
            "range": "± 4211",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2905095,
            "range": "± 5663",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 152221,
            "range": "± 8690",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 162167,
            "range": "± 7836",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9519428,
            "range": "± 52474",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14287271,
            "range": "± 54914",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19606631,
            "range": "± 76223",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24686528,
            "range": "± 42935",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 37081413,
            "range": "± 140449",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 37433987,
            "range": "± 116849",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43862381,
            "range": "± 156578",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 135167,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 136313,
            "range": "± 1035",
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
          "id": "becc21f940a20bd40aa360ebcfd0968906fc6abc",
          "message": "refactor!: remove free solve and solve_adaptive functions\n\nRemove the standalone `pub fn solve` and `pub fn solve_adaptive`\nconvenience functions, along with their re-exports. Users must now\nuse `FixedStepODESolver` or `AdaptiveODESolver` directly with the\n`ODESolver::solve` trait method.\n\nUpdate all internal call sites (tests, benchmarks, doc examples,\ndoc comments) to use the struct-based API instead.\n\nThis simplifies the public API surface and avoids duplicating\nconstructor logic.",
          "timestamp": "2026-06-10T15:00:59+03:00",
          "tree_id": "51c0a12d5ad63c7531d95336d88ffe131d9798bb",
          "url": "https://github.com/murenkov/raznoor.rs/commit/becc21f940a20bd40aa360ebcfd0968906fc6abc"
        },
        "date": 1781093471083,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5853,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6437,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 61166,
            "range": "± 2953",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 61991,
            "range": "± 1267",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8610,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8902,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83575,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 84742,
            "range": "± 1558",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11299,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11646,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 110259,
            "range": "± 1015",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 111576,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13811,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 14092,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 136126,
            "range": "± 1857",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 136316,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 21237,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 21193,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 210501,
            "range": "± 4048",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 208725,
            "range": "± 8558",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21800,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 21688,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 213339,
            "range": "± 632",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 213882,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 25918,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 25621,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 254115,
            "range": "± 1611",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 250835,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6173,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39687,
            "range": "± 1410",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6463,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 40665,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 704816,
            "range": "± 6425",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 973108,
            "range": "± 5061",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1282422,
            "range": "± 5713",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1566860,
            "range": "± 25061",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2412130,
            "range": "± 67298",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2472092,
            "range": "± 14110",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2903650,
            "range": "± 95103",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 152765,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 157842,
            "range": "± 653",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9564052,
            "range": "± 52276",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14844530,
            "range": "± 103626",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 20733587,
            "range": "± 552893",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 25456930,
            "range": "± 305751",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 38342031,
            "range": "± 226581",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 38812028,
            "range": "± 260490",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 45263554,
            "range": "± 151220",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 135884,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 136520,
            "range": "± 427",
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
          "id": "690b15230d2631ae880686dc63c44c219be69312",
          "message": "feat!: add EnsembleODEProblem and parallel batched solves with rayon",
          "timestamp": "2026-06-10T12:02:09Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/65/commits/690b15230d2631ae880686dc63c44c219be69312"
        },
        "date": 1781098631358,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 6157,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6336,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 62528,
            "range": "± 1978",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60440,
            "range": "± 955",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8577,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8572,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83319,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 83467,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11167,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11108,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 108714,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 108660,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13617,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13632,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 133308,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 133048,
            "range": "± 811",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20356,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20289,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 200020,
            "range": "± 811",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 200044,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20625,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20618,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 203069,
            "range": "± 8672",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 202905,
            "range": "± 837",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24164,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24111,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 238111,
            "range": "± 1359",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 240298,
            "range": "± 1507",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6002,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38204,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6177,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38997,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 695088,
            "range": "± 2091",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 957888,
            "range": "± 2801",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1258884,
            "range": "± 23635",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1535268,
            "range": "± 13908",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2345732,
            "range": "± 5018",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2388700,
            "range": "± 6733",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2831191,
            "range": "± 25199",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 149011,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 154012,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 8983316,
            "range": "± 135173",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13795751,
            "range": "± 60191",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19076751,
            "range": "± 114912",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24135188,
            "range": "± 84398",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36382745,
            "range": "± 126930",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36723110,
            "range": "± 127573",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43153063,
            "range": "± 191732",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 133263,
            "range": "± 915",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 132686,
            "range": "± 1747",
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
          "id": "ba211e07614e208541bbf763af34244707f4d6c3",
          "message": "feat!: add EnsembleODEProblem and parallel batched solves with rayon",
          "timestamp": "2026-06-10T12:02:09Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/65/commits/ba211e07614e208541bbf763af34244707f4d6c3"
        },
        "date": 1781099637300,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 6154,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6246,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 61987,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60548,
            "range": "± 1063",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8563,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8529,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83229,
            "range": "± 604",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 83260,
            "range": "± 1305",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11134,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11123,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 108637,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 108859,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13628,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13654,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 133330,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 133306,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20365,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20613,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 200269,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 200407,
            "range": "± 840",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20722,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20652,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 202772,
            "range": "± 1601",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 204214,
            "range": "± 5838",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24163,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24128,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 238075,
            "range": "± 767",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 237794,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6012,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38338,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6181,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39041,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 694107,
            "range": "± 919",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 957202,
            "range": "± 3102",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1260414,
            "range": "± 8099",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1546723,
            "range": "± 19753",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2346917,
            "range": "± 9229",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2391948,
            "range": "± 4922",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2860155,
            "range": "± 19758",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 150803,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 155578,
            "range": "± 1367",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9075548,
            "range": "± 22312",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13973372,
            "range": "± 42591",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19231873,
            "range": "± 70898",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24426797,
            "range": "± 62257",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36754887,
            "range": "± 88478",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 37039167,
            "range": "± 89422",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43341786,
            "range": "± 76414",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 133397,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 133058,
            "range": "± 312",
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
          "id": "92f7100fbf92cd1a8fd1338a1a76e5f260ecd851",
          "message": "feat!: add EnsembleODEProblem and parallel batched solves with rayon\n\nAdd EnsembleODEProblem struct with validated constructor (new, with_events,\nnum_members) and seal all fields behind public getter methods (f, u0, tspan,\nevents) for consistency with FixedStepODESolver/AdaptiveODESolver.\n\nImplement EnsembleODESolver trait that solves each ensemble member in\nparallel via rayon (requires the \"parallel\" feature).",
          "timestamp": "2026-06-10T16:54:23+03:00",
          "tree_id": "fd599dd5679c609ad52179b1bb326c0facb51b33",
          "url": "https://github.com/murenkov/raznoor.rs/commit/92f7100fbf92cd1a8fd1338a1a76e5f260ecd851"
        },
        "date": 1781100232043,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 3125,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 4753,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 46380,
            "range": "± 676",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 46038,
            "range": "± 950",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 5784,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 5732,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 56004,
            "range": "± 1829",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 55591,
            "range": "± 1230",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 6859,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 6785,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 66901,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 66338,
            "range": "± 1107",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 7952,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 7878,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 77160,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 76931,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 12188,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 12371,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 118914,
            "range": "± 2954",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 119926,
            "range": "± 2835",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 12288,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 12339,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 130660,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 121233,
            "range": "± 2384",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 14277,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 14467,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 140505,
            "range": "± 5631",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 139723,
            "range": "± 1060",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 3945,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 24862,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 4057,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 25486,
            "range": "± 830",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 528801,
            "range": "± 4832",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 636840,
            "range": "± 13398",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 781473,
            "range": "± 19384",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 934337,
            "range": "± 12622",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 1442602,
            "range": "± 47073",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 1449329,
            "range": "± 36669",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 1689758,
            "range": "± 18530",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 98965,
            "range": "± 2264",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 100477,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 6893746,
            "range": "± 252414",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 9497498,
            "range": "± 130845",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 12656026,
            "range": "± 641959",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 15859985,
            "range": "± 119034",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 22456527,
            "range": "± 195809",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 22760312,
            "range": "± 877081",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 26932949,
            "range": "± 1044684",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 81734,
            "range": "± 3165",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 80581,
            "range": "± 762",
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
          "id": "d51c0cffac5fa0eaedc535a9ea471cbe2d99d80c",
          "message": "refactor(solver)!: restructure solver.rs into solver/ directory with focused sub-modules",
          "timestamp": "2026-06-10T13:56:23Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/66/commits/d51c0cffac5fa0eaedc535a9ea471cbe2d99d80c"
        },
        "date": 1781101578098,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5855,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6306,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60437,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60639,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8597,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8516,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83235,
            "range": "± 1212",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 83329,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11256,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11092,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109792,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 108698,
            "range": "± 2462",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 14003,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13826,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134741,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 132869,
            "range": "± 1498",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20884,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20425,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 205314,
            "range": "± 1043",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 201651,
            "range": "± 3109",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21182,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20957,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 208509,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 205358,
            "range": "± 3307",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24915,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24634,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 245391,
            "range": "± 3491",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 243042,
            "range": "± 2963",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6120,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39695,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6312,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 40653,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 700100,
            "range": "± 9473",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 962920,
            "range": "± 5960",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1270256,
            "range": "± 52272",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1551772,
            "range": "± 19181",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2367300,
            "range": "± 4347",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2422148,
            "range": "± 6790",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2870533,
            "range": "± 8796",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 150349,
            "range": "± 1281",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 155649,
            "range": "± 674",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 8967473,
            "range": "± 16433",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13940650,
            "range": "± 199334",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19099969,
            "range": "± 78005",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24305765,
            "range": "± 92984",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36367650,
            "range": "± 643732",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36675800,
            "range": "± 467363",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43007072,
            "range": "± 149092",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134701,
            "range": "± 2906",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 132866,
            "range": "± 6686",
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
          "id": "69fe59857bacbf22676e43a40c6b26d4afb45bbd",
          "message": "refactor(solver)!: restructure solver.rs into solver/ directory with focused sub-modules\n\nBreak src/solver.rs into src/solver/ with:\n- mod.rs: re-exports; ODESolver + EnsembleODESolver trait definitions\n- core.rs: StepperContext, StepState, compute_stages, weighted_sum, advance\n- events.rs: bisect_event, detect_events\n- fixed_step.rs: FixedStepODESolver struct + ODESolver impl\n- adaptive.rs: AdaptiveODESolver struct + ODESolver impl\n\nMake solver module private (pub mod -> mod) since items are\nindividually re-exported at crate root. This is breaking for\nanyone importing via raznoor::solver::* instead of the\nalready-available re-exports at raznoor::*.,",
          "timestamp": "2026-06-10T17:26:54+03:00",
          "tree_id": "f1be539fe5a853335c1fec270c5b3ff8f0f2ecff",
          "url": "https://github.com/murenkov/raznoor.rs/commit/69fe59857bacbf22676e43a40c6b26d4afb45bbd"
        },
        "date": 1781102232462,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5886,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6286,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60616,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60668,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8647,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8533,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83625,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 83336,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11333,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11090,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 110251,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 108636,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13816,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13577,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 135118,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 132723,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20926,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20449,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 205591,
            "range": "± 970",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 201440,
            "range": "± 875",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21283,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20900,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 208566,
            "range": "± 1002",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 205463,
            "range": "± 2503",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24963,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24636,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 245878,
            "range": "± 1507",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 242838,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6062,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 40360,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6253,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 41235,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 700368,
            "range": "± 8371",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 959643,
            "range": "± 6984",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1269373,
            "range": "± 34230",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1551526,
            "range": "± 23314",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2366402,
            "range": "± 7463",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2414498,
            "range": "± 14279",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2862821,
            "range": "± 21438",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 151683,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 154243,
            "range": "± 1938",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9030453,
            "range": "± 96053",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14050242,
            "range": "± 27242",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19378088,
            "range": "± 86569",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 25046204,
            "range": "± 92310",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 37061235,
            "range": "± 113881",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 37405869,
            "range": "± 188671",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43911638,
            "range": "± 190681",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 135616,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 133378,
            "range": "± 455",
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
          "id": "eafd33cf23361a73763038ca0d82045d3bd3af54",
          "message": "test: move tests from src/lib.rs to tests/ directory",
          "timestamp": "2026-06-10T14:31:01Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/67/commits/eafd33cf23361a73763038ca0d82045d3bd3af54"
        },
        "date": 1781103014859,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5917,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6321,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60433,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60662,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8616,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8519,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83302,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 83311,
            "range": "± 1606",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11289,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11090,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109865,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 108809,
            "range": "± 2067",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13818,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13589,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134957,
            "range": "± 1194",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 132847,
            "range": "± 716",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20937,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20529,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 205667,
            "range": "± 995",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 201808,
            "range": "± 1516",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21229,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20915,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 208756,
            "range": "± 2649",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 205322,
            "range": "± 740",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24978,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24653,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 245664,
            "range": "± 2194",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 242841,
            "range": "± 2206",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6068,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 40504,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6258,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 41360,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 702104,
            "range": "± 7376",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 961301,
            "range": "± 3389",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1270957,
            "range": "± 18032",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1553242,
            "range": "± 26056",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2370702,
            "range": "± 7258",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2417633,
            "range": "± 63791",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2870319,
            "range": "± 14573",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 151541,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 156283,
            "range": "± 2992",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 8956049,
            "range": "± 111386",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13783619,
            "range": "± 277933",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19046922,
            "range": "± 206441",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24025903,
            "range": "± 405711",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36381835,
            "range": "± 356991",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36893681,
            "range": "± 130714",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 42961937,
            "range": "± 453998",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134959,
            "range": "± 1909",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 133293,
            "range": "± 1026",
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
          "id": "e75d52af1c7ee28c48fe9c0f404bf5d1dcb462e5",
          "message": "test: move tests from src/lib.rs to tests/ directory\n\nMove inline test code from `#[cfg(test)] mod tests` in\n`src/lib.rs` into dedicated integration test files under `tests/`:\n\n- `tests/common/mod.rs` — shared helpers (residual, linear_problem,\n  oscillator_problem)\n- `tests/fixed_step.rs` — fixed-step solver tests (ode_test! macro\n  expansions inlined as regular functions)\n- `tests/adaptive.rs` — adaptive solver tests (adaptive_test! and\n  adaptive_not_supported_test! macro expansions inlined)\n- `tests/events.rs` — event detection tests\n- `tests/edge_cases.rs` — zero/negative dt, NaN/Inf, empty system,\n  negative direction edge cases\n- `tests/property_tests.rs` — proptest-based property tests\n- `tests/batch.rs` — parallel batch tests (behind cfg(feature =\n  \"parallel\"))\n\nMacro_rules! definitions (ode_test!, adaptive_test!,\nadaptive_not_supported_test!) are inlined since they cannot be shared\nacross integration test files without #[macro_export].",
          "timestamp": "2026-06-10T17:51:05+03:00",
          "tree_id": "4566be637dddfb676ffdc81a135c55c27cc51fc3",
          "url": "https://github.com/murenkov/raznoor.rs/commit/e75d52af1c7ee28c48fe9c0f404bf5d1dcb462e5"
        },
        "date": 1781103663987,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5294,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6686,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 63958,
            "range": "± 876",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 64975,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8589,
            "range": "± 707",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8322,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82387,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 81564,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 10959,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10785,
            "range": "± 657",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 106450,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 104086,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13270,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 12884,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 129525,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 125041,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20086,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 19335,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 198891,
            "range": "± 1060",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 188928,
            "range": "± 2689",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 20443,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 19671,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 201302,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 193062,
            "range": "± 2008",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 23890,
            "range": "± 1592",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 22908,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 234053,
            "range": "± 729",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 224325,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6185,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38247,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6368,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38838,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 731128,
            "range": "± 2624",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 961952,
            "range": "± 2157",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1207250,
            "range": "± 16817",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1433297,
            "range": "± 25749",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2230019,
            "range": "± 11695",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2275300,
            "range": "± 8195",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2661476,
            "range": "± 9902",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 143662,
            "range": "± 1825",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 146909,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9283286,
            "range": "± 18392",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13491513,
            "range": "± 33131",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 18526547,
            "range": "± 32935",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 22758693,
            "range": "± 77737",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 33169849,
            "range": "± 105255",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 33712864,
            "range": "± 77557",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 38733448,
            "range": "± 485131",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 129368,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 125287,
            "range": "± 1059",
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
          "id": "3e6d5917f9da841994e1cc1e9f4cdc9ab9c2abcf",
          "message": "chore(deps): add deny.toml for dependency auditing",
          "timestamp": "2026-06-10T14:31:01Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/68/commits/3e6d5917f9da841994e1cc1e9f4cdc9ab9c2abcf"
        },
        "date": 1781103754182,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5918,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6408,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 61328,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 61510,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8675,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8636,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83939,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 84171,
            "range": "± 607",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11310,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11122,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109938,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 109099,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13816,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13616,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134743,
            "range": "± 972",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 133285,
            "range": "± 924",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20806,
            "range": "± 2098",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20630,
            "range": "± 2603",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 205281,
            "range": "± 841",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 202739,
            "range": "± 5397",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21124,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20947,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 208150,
            "range": "± 32209",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 206511,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24961,
            "range": "± 734",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24690,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 246268,
            "range": "± 1349",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 243538,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6039,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 44288,
            "range": "± 2548",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6242,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 44851,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 700182,
            "range": "± 1582",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 959508,
            "range": "± 8786",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1259152,
            "range": "± 11328",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1548428,
            "range": "± 26717",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2367220,
            "range": "± 14618",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2416847,
            "range": "± 9610",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2864721,
            "range": "± 349125",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 150233,
            "range": "± 4360",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 155623,
            "range": "± 1006",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 8975341,
            "range": "± 23045",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13904700,
            "range": "± 63121",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19079814,
            "range": "± 93017",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24126511,
            "range": "± 73385",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36346466,
            "range": "± 83982",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36701788,
            "range": "± 78932",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43002846,
            "range": "± 602409",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134390,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 133102,
            "range": "± 4132",
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
          "id": "9e997a7f01071308abfdb1b41d41a36a1a0bf50d",
          "message": "chore(deps): add deny.toml for dependency auditing\n\nIntroduce cargo-deny configuration to audit dependencies for:\n\n- Advisory vulnerabilities (deny)\n- Unmaintained and yanked crates (warn)\n- License compliance (MIT only, 80% confidence)\n- Multiple version bans (deny)\n- Source restrictions (no git dependencies)",
          "timestamp": "2026-06-10T18:07:36+03:00",
          "tree_id": "527af9fb2cc151d0169d703a4bbda42399c1cb98",
          "url": "https://github.com/murenkov/raznoor.rs/commit/9e997a7f01071308abfdb1b41d41a36a1a0bf50d"
        },
        "date": 1781104616082,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 2917,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 4540,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 43417,
            "range": "± 1647",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 43960,
            "range": "± 1982",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 5532,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 5641,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 54262,
            "range": "± 1060",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 52288,
            "range": "± 1711",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 6544,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 6474,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 65091,
            "range": "± 2759",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 63376,
            "range": "± 1648",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 7548,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 7597,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 75996,
            "range": "± 1903",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 75153,
            "range": "± 2638",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 11897,
            "range": "± 828",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 11374,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 123278,
            "range": "± 6217",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 115204,
            "range": "± 2371",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 12722,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 11652,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 115745,
            "range": "± 3782",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 117376,
            "range": "± 4742",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 14084,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 13408,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 134417,
            "range": "± 6266",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 131401,
            "range": "± 4495",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 3684,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 24132,
            "range": "± 1171",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 3937,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 24159,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 512558,
            "range": "± 12506",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 612403,
            "range": "± 9505",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 739417,
            "range": "± 10973",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 852837,
            "range": "± 11568",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 1349476,
            "range": "± 23512",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 1383868,
            "range": "± 13986",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 1581785,
            "range": "± 25424",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 96389,
            "range": "± 5077",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 95266,
            "range": "± 3571",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 6408093,
            "range": "± 287826",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 9171077,
            "range": "± 190834",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 11676568,
            "range": "± 236041",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 14483172,
            "range": "± 296235",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 21279075,
            "range": "± 977690",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 21365631,
            "range": "± 216826",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 25209297,
            "range": "± 377582",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 74318,
            "range": "± 10619",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 73458,
            "range": "± 1398",
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
          "id": "5cc8285371c90754f418cebeef3a18d4f31128e6",
          "message": "refactor: extract adaptive controller magic numbers into named constants",
          "timestamp": "2026-06-10T14:57:28Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/69/commits/5cc8285371c90754f418cebeef3a18d4f31128e6"
        },
        "date": 1781104954292,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5767,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6316,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 59977,
            "range": "± 1410",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60877,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8595,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8676,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83759,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 83832,
            "range": "± 788",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11448,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11267,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 110752,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 110162,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13858,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13816,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 136731,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 136147,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 21200,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20677,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 207987,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 203072,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21454,
            "range": "± 625",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20809,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 211153,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 205562,
            "range": "± 3787",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 25240,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24337,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 248289,
            "range": "± 4618",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 240357,
            "range": "± 691",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6208,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 41777,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6455,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 42599,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 708608,
            "range": "± 3355",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 971681,
            "range": "± 5539",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1290841,
            "range": "± 7906",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1568450,
            "range": "± 15001",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2399028,
            "range": "± 7799",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2444812,
            "range": "± 4868",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2876671,
            "range": "± 6598",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 155060,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 160167,
            "range": "± 1982",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9311117,
            "range": "± 26079",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13981355,
            "range": "± 70516",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19185409,
            "range": "± 77462",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24192849,
            "range": "± 89358",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 37011250,
            "range": "± 69228",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 37282519,
            "range": "± 62377",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43995963,
            "range": "± 194349",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 136666,
            "range": "± 4304",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 136560,
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
          "id": "5cc8285371c90754f418cebeef3a18d4f31128e6",
          "message": "refactor: extract adaptive controller magic numbers into named constants",
          "timestamp": "2026-06-10T14:57:28Z",
          "url": "https://github.com/murenkov/raznoor.rs/pull/69/commits/5cc8285371c90754f418cebeef3a18d4f31128e6"
        },
        "date": 1781105743139,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 4465,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 4877,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 46835,
            "range": "± 2679",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 47175,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 6614,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 6663,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 64268,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 64509,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 8746,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 8615,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 85396,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 84647,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 10745,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 10642,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 105381,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 104017,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 16365,
            "range": "± 1026",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 15864,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 160805,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 156550,
            "range": "± 4776",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 16534,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 16092,
            "range": "± 1670",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 163024,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 158573,
            "range": "± 1839",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 19479,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 18875,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 192374,
            "range": "± 596",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 186266,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 4836,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 30397,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 4946,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 30935,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 545458,
            "range": "± 2528",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 750655,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 993036,
            "range": "± 12364",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1232256,
            "range": "± 8130",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 1853801,
            "range": "± 23553",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 1885180,
            "range": "± 14529",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2220639,
            "range": "± 2977",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 117555,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 121061,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 7394461,
            "range": "± 15390",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 10945609,
            "range": "± 21909",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 14888470,
            "range": "± 35213",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 18806451,
            "range": "± 236810",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 28701528,
            "range": "± 589467",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 28993150,
            "range": "± 58125",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 34070867,
            "range": "± 59016",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 107772,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 106144,
            "range": "± 246",
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
          "id": "fe977dbf4aa5db5a1e78c009f0f1bd45668622cd",
          "message": "ci: skip benchmark store step on PR events\n\nGITHUB_TOKEN is read-only on pull_request events from forks, so the\nbenchmark-action/github-action-benchmark@v1 step fails with 'Requires\nauthentication' when trying to post alert comments or push to gh-pages.\nOnly run the store/push/comment step on push to main.",
          "timestamp": "2026-06-10T18:58:04+03:00",
          "tree_id": "2c782d15ba21afd2c6fbec5c7178078cf8df3526",
          "url": "https://github.com/murenkov/raznoor.rs/commit/fe977dbf4aa5db5a1e78c009f0f1bd45668622cd"
        },
        "date": 1781107703188,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5760,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6334,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60004,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60485,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 9560,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 9695,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 92977,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 94350,
            "range": "± 2169",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11297,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11218,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109834,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 109565,
            "range": "± 2638",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13925,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13754,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 135899,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 134667,
            "range": "± 3554",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20915,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20456,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 205737,
            "range": "± 706",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 201545,
            "range": "± 2478",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21169,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20738,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 208504,
            "range": "± 1158",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 203754,
            "range": "± 1384",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 25063,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24229,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 246896,
            "range": "± 716",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 239718,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6095,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 40167,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6341,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 40871,
            "range": "± 1837",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 705480,
            "range": "± 10447",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 961491,
            "range": "± 8476",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1279988,
            "range": "± 25982",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1558871,
            "range": "± 28048",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2379847,
            "range": "± 81077",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2424652,
            "range": "± 5850",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2863047,
            "range": "± 27782",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 151440,
            "range": "± 3017",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 156898,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9303458,
            "range": "± 89461",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 16175030,
            "range": "± 296302",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19313558,
            "range": "± 88586",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24441551,
            "range": "± 436578",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 37074037,
            "range": "± 970124",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 37432689,
            "range": "± 488341",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 44270782,
            "range": "± 149206",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 138129,
            "range": "± 3863",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 134653,
            "range": "± 601",
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
          "id": "ccab75c30c1b2c8961de687392c822be506dd455",
          "message": "refactor: extract adaptive controller magic numbers into named constants\n\nReplace hardcoded adaptive controller parameters (safety factor, step\nchange limits, max steps) with module-level constants for improved\nreadability and tunability.\n\nAdd a `max_steps` field to `AdaptiveODESolver` with a builder method\n`with_max_steps()` so users can configure the step limit without\nediting source code.",
          "timestamp": "2026-06-10T19:12:11+03:00",
          "tree_id": "eb9aa9609d62147fa1a15a4da7018dd2ea1469ac",
          "url": "https://github.com/murenkov/raznoor.rs/commit/ccab75c30c1b2c8961de687392c822be506dd455"
        },
        "date": 1781108538795,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5895,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6275,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60758,
            "range": "± 3810",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60219,
            "range": "± 967",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8606,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8441,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83432,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 82501,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11273,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10958,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 110024,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 107608,
            "range": "± 2937",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13817,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13474,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134895,
            "range": "± 2818",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 131802,
            "range": "± 752",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 21336,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20034,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 205850,
            "range": "± 2042",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 197464,
            "range": "± 799",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21268,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20352,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 208860,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 200366,
            "range": "± 2739",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 25139,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 23918,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 246468,
            "range": "± 2032",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 235488,
            "range": "± 3473",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6258,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 38050,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6361,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38845,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 704215,
            "range": "± 5298",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 975549,
            "range": "± 3084",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1287831,
            "range": "± 21625",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1572750,
            "range": "± 19601",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2428149,
            "range": "± 6005",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2484897,
            "range": "± 10390",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2937144,
            "range": "± 18416",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 152974,
            "range": "± 983",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 157916,
            "range": "± 1598",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9015990,
            "range": "± 20074",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13980641,
            "range": "± 343964",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19127667,
            "range": "± 47419",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24246319,
            "range": "± 48427",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36362492,
            "range": "± 234441",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36711878,
            "range": "± 159604",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43217194,
            "range": "± 745259",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134938,
            "range": "± 1456",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 131684,
            "range": "± 1564",
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
          "id": "93544cee982bf96df310dc52f81bd5730d33880e",
          "message": "ci: test both default and parallel feature configurations\n\nAdd a CI matrix to test without features (default) and with the\nparallel feature, ensuring both configurations are validated.\n\nPreviously only `cargo test --features parallel` was run, leaving the\ndefault configuration untested in CI.",
          "timestamp": "2026-06-10T19:36:53+03:00",
          "tree_id": "1a938ba346775a275d09d8370da8cd3e5e801373",
          "url": "https://github.com/murenkov/raznoor.rs/commit/93544cee982bf96df310dc52f81bd5730d33880e"
        },
        "date": 1781110039187,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5764,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6324,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60694,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 61327,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8559,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8543,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82737,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 83215,
            "range": "± 2941",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11238,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11269,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109831,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 109274,
            "range": "± 1638",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13855,
            "range": "± 1073",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13652,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 135671,
            "range": "± 4291",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 133794,
            "range": "± 5522",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 21095,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20479,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 207030,
            "range": "± 478",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 201920,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21332,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20795,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 210346,
            "range": "± 931",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 205182,
            "range": "± 1131",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 25267,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24220,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 247372,
            "range": "± 6239",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 239389,
            "range": "± 2846",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6118,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39132,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6312,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39806,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 709665,
            "range": "± 2627",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 968139,
            "range": "± 6752",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1280542,
            "range": "± 33188",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1566790,
            "range": "± 17872",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2387120,
            "range": "± 5465",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2427585,
            "range": "± 25204",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2865751,
            "range": "± 9752",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 151696,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 156180,
            "range": "± 2593",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9345946,
            "range": "± 25511",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13948554,
            "range": "± 46039",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19097758,
            "range": "± 564094",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24286820,
            "range": "± 100479",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 37910529,
            "range": "± 60330",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 38261111,
            "range": "± 139675",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43943426,
            "range": "± 1125253",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 136262,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 134496,
            "range": "± 722",
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
          "id": "e84fc35060328ad5c3cad03e543cf942a8e0560d",
          "message": "docs(roadmap): mark no_std support as cancelled\n\nThe no_std feature was evaluated and is not being pursued\nat this time due to dependency compatibility challenges and\nlimited demand.",
          "timestamp": "2026-06-10T21:27:17+03:00",
          "tree_id": "60b8fe188d370700c4ffbe30b5e2c7263374bcde",
          "url": "https://github.com/murenkov/raznoor.rs/commit/e84fc35060328ad5c3cad03e543cf942a8e0560d"
        },
        "date": 1781116655417,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5896,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6277,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60776,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60392,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8622,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8451,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 83441,
            "range": "± 1376",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 82645,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11277,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 10983,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 110035,
            "range": "± 2275",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 107840,
            "range": "± 821",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13813,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13487,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 134905,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 131781,
            "range": "± 712",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20937,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20037,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 205740,
            "range": "± 2405",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 197821,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21251,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20391,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 210229,
            "range": "± 1599",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 200576,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 25054,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 23918,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 246686,
            "range": "± 1926",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 235175,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6069,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 37902,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6309,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 38708,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 704222,
            "range": "± 2506",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 973745,
            "range": "± 3309",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1288227,
            "range": "± 10031",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1572039,
            "range": "± 28599",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2431446,
            "range": "± 6678",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2480393,
            "range": "± 5878",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2943290,
            "range": "± 51151",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 154496,
            "range": "± 2073",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 159523,
            "range": "± 904",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9003961,
            "range": "± 60896",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13843665,
            "range": "± 67638",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19145234,
            "range": "± 45990",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24221944,
            "range": "± 54698",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36336583,
            "range": "± 57141",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36706404,
            "range": "± 68448",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43185845,
            "range": "± 77229",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 134977,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 132158,
            "range": "± 355",
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
          "id": "4cf4d5cc18afd6194be09701780ed81a54c92471",
          "message": "feat: add RhsODEFn trait alias for ODE right-hand side function\n\nAdd a `RhsODEFn<T>` trait alias that abstracts the\n`Fn(T, &Array1<T>) -> Array1<T>` signature used for ODE system\nright-hand side functions. The new trait comes with a blanket impl\nso all existing closures and function items work without changes.\n\nUpdate all internal trait bounds across the codebase to use\n`RhsODEFn<T>` instead of the raw `Fn(...)` bound for improved\nreadability and API clarity.",
          "timestamp": "2026-06-11T13:16:04+03:00",
          "tree_id": "5a7de654b127b9b996234ce22cccb99578f5037f",
          "url": "https://github.com/murenkov/raznoor.rs/commit/4cf4d5cc18afd6194be09701780ed81a54c92471"
        },
        "date": 1781173578541,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5779,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6313,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60303,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60911,
            "range": "± 1172",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 8536,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8523,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 82924,
            "range": "± 1644",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 83308,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 11275,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11223,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 109717,
            "range": "± 1556",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 110126,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 13919,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13717,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 135950,
            "range": "± 2121",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 134624,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 20964,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20424,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 206558,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 202080,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21214,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 20726,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 208544,
            "range": "± 7027",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 204481,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 24919,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24296,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 245637,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 239716,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6071,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39247,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6283,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 39918,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 701889,
            "range": "± 9417",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 967229,
            "range": "± 3495",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1278741,
            "range": "± 20228",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1563289,
            "range": "± 24828",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2386405,
            "range": "± 5801",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2425082,
            "range": "± 34401",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2863942,
            "range": "± 85441",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 151703,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 156440,
            "range": "± 1620",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9331252,
            "range": "± 68318",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 13892075,
            "range": "± 236403",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19309892,
            "range": "± 340083",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 24315424,
            "range": "± 57537",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 37202571,
            "range": "± 118511",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 37557919,
            "range": "± 686065",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 44349096,
            "range": "± 68999",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 135846,
            "range": "± 1828",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 134646,
            "range": "± 1256",
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
          "id": "c280d66c1c15bd23733eab850a5bcfbeb4a386bc",
          "message": "refactor(solver): split solve into focused helper functions\n\nExtract three helpers from the `solve` method:\n\n- `generate_time_grid` — free function that builds the uniform time\n  grid from a `(t0, t1)` tuple and step size `dt`, handling forward/\n  backward integration automatically.\n\n- `StepData` — struct grouping per-step variables (`u_curr`, `du`,\n  `dt`, `t_prev`, `t_next`) so that `handle_step_events` takes 3\n  parameters instead of 7.\n\n- `StepOutcome` enum + `handle_step_events` — encapsulates the event\n  detection branch: computing `u_new`, checking zero-crossings, and\n  returning a typed outcome (`Continue`, `NonTerminalEvent`,\n  `TerminalEvent`).",
          "timestamp": "2026-06-11T14:02:41+03:00",
          "tree_id": "b899e58d1dd9bef4e0ac0a5a2a29963af56eb605",
          "url": "https://github.com/murenkov/raznoor.rs/commit/c280d66c1c15bd23733eab850a5bcfbeb4a386bc"
        },
        "date": 1781176364305,
        "tool": "cargo",
        "benches": [
          {
            "name": "fixed_step/RK1_f32_coarse",
            "value": 5860,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_coarse",
            "value": 6356,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f32_fine",
            "value": 60459,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK1_f64_fine",
            "value": 60856,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_coarse",
            "value": 9722,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_coarse",
            "value": 8595,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f32_fine",
            "value": 92106,
            "range": "± 912",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK2_f64_fine",
            "value": 83712,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_coarse",
            "value": 12222,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_coarse",
            "value": 11190,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f32_fine",
            "value": 117253,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK3_f64_fine",
            "value": 109892,
            "range": "± 6046",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_coarse",
            "value": 14737,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_coarse",
            "value": 13728,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f32_fine",
            "value": 142143,
            "range": "± 1210",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK4_f64_fine",
            "value": 141640,
            "range": "± 18733",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_coarse",
            "value": 21637,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_coarse",
            "value": 20661,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f32_fine",
            "value": 210789,
            "range": "± 2945",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/RK5_f64_fine",
            "value": 203632,
            "range": "± 600",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_coarse",
            "value": 21877,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_coarse",
            "value": 21101,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f32_fine",
            "value": 213144,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/Fehlberg45_f64_fine",
            "value": 207328,
            "range": "± 769",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_coarse",
            "value": 26153,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_coarse",
            "value": 24903,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f32_fine",
            "value": 249796,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "fixed_step/DP45_f64_fine",
            "value": 248180,
            "range": "± 1517",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f32",
            "value": 6141,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/Fehlberg45_f64",
            "value": 39007,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f32",
            "value": 6456,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "adaptive/DP45_f64",
            "value": 40340,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK1_fixed",
            "value": 702636,
            "range": "± 1471",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK2_fixed",
            "value": 974206,
            "range": "± 1666",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK3_fixed",
            "value": 1289128,
            "range": "± 11090",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK4_fixed",
            "value": 1576694,
            "range": "± 21423",
            "unit": "ns/iter"
          },
          {
            "name": "system/RK5_fixed",
            "value": 2431341,
            "range": "± 13255",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_fixed",
            "value": 2483524,
            "range": "± 5126",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_fixed",
            "value": 2936002,
            "range": "± 7480",
            "unit": "ns/iter"
          },
          {
            "name": "system/Fehlberg45_adaptive",
            "value": 153665,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "system/DP45_adaptive",
            "value": 158759,
            "range": "± 1528",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK1_100k",
            "value": 9760451,
            "range": "± 49716",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK2_100k",
            "value": 14295455,
            "range": "± 413615",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK3_100k",
            "value": 19385197,
            "range": "± 63315",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK4_100k",
            "value": 25605235,
            "range": "± 588030",
            "unit": "ns/iter"
          },
          {
            "name": "large/RK5_100k",
            "value": 36654758,
            "range": "± 252906",
            "unit": "ns/iter"
          },
          {
            "name": "large/Fehlberg45_100k",
            "value": 36918696,
            "range": "± 303626",
            "unit": "ns/iter"
          },
          {
            "name": "large/DP45_100k",
            "value": 43606880,
            "range": "± 101414",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f32",
            "value": 142995,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "precision/RK4_f64",
            "value": 135946,
            "range": "± 418",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}