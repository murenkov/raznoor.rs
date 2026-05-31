window.BENCHMARK_DATA = {
  "lastUpdate": 1780228526548,
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
      }
    ]
  }
}