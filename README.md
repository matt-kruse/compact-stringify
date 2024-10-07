# compact-stringify
A JSON.stringify replacement with more compact and scannable output

## Usage
```javascript
import compactStringify from 'compact-stringify'
const formatted = compactStringify(json)
console.log(formatted)
```

## Example 1

<table>
<tr>
  <th>JSON.stringify()</th>
  <th>compactStringify()</th>
</tr>
<tr>
<td style="vertical-align:top">
<pre>
{
  "department": "Sales",
  "bosses": [
    {
      "name": "Alice",
      "title": "Manager"
    },
    {
      "name": "Bob",
      "title": "Supervisor"
    },
    {
      "name": "Cathy",
      "title": "Director"
    },
    {
      "name": "David",
      "title": "Manager"
    },
    {
      "name": "Eve",
      "title": "Supervisor"
    }
  ],
  "employees": [
    {
      "name": "Matt",
      "projects": [
        {
          "name": "Mega App",
          "budget": 10000000,
          "release": "2024-06-01"
        },
        {
          "name": "Super App",
          "budget": 50000000,
          "release": "2025-01-01"
        },
        {
          "name": "Mini App",
          "budget": 100000,
          "release": "2026-12-01"
        }
      ]
    },
    {
      "name": "Sally",
      "projects": [
        {
          "name": "Uber App",
          "budget": 30000000,
          "release": "2027-06-01"
        },
        {
          "name": "Nirvana App",
          "budget": 50000,
          "release": "2028-01-01"
        },
        {
          "name": "App App",
          "budget": 50,
          "release": "2029-12-01"
        }
      ]
    }
  ]
}
</pre>
</td>
<td style="vertical-align:top;">
<pre>
{
  "default": {
    "department": "Sales",
    "bosses": [
      { "name": "Alice", "title": "Manager"   },
      { "name": "Bob"  , "title": "Supervisor"},
      { "name": "Cathy", "title": "Director"  },
      { "name": "David", "title": "Manager"   },
      { "name": "Eve"  , "title": "Supervisor"}
    ],
    "employees": [
      {
        "name": "Matt",
        "projects": [
          { "name": "Mega App" , "budget": 10000000, "release": "2024-06-01"},
          { "name": "Super App", "budget": 50000000, "release": "2025-01-01"},
          { "name": "Mini App" , "budget": 100000  , "release": "2026-12-01"}
        ]
      },
      {
        "name": "Sally",
        "projects": [
          { "name": "Uber App"   , "budget": 30000000, "release": "2027-06-01"},
          { "name": "Nirvana App", "budget": 50000   , "release": "2028-01-01"},
          { "name": "App App"    , "budget": 50      , "release": "2029-12-01"}
        ]
      }
    ]
}
</pre>
</td>
</tr>
</table>

## Example 2

<table>
<tr>
  <th>JSON.stringify()</th>
  <th>compactStringify()</th>
</tr>
<tr>
<td style="vertical-align:top">
<pre>
{
	"key": "value",
	"randomNumber": 11,
	"fruits": [
		"apple",
		"banana",
		"cherry"
	],
	"date": "2024-10-09 11:21:51",
	"people": [
		{
			"age": 25,
			"last_login": "2024-08-25",
			"boolean": false,
			"name": "Alice",
			"letters": "A"
		},
		{
			"age": 11,
			"last_login": "2024-09-19",
			"boolean": true,
			"name": "Barry",
			"letters": "DDDD"
		},
		{
			"age": 9,
			"last_login": "2024-09-05",
			"boolean": true,
			"name": "Cathy",
			"letters": "CCC"
		},
		{
			"age": 4,
			"last_login": "2024-08-28",
			"boolean": true,
			"name": "David",
			"letters": "EEEEE"
		},
		{
			"age": 17,
			"last_login": "2024-08-13",
			"boolean": false,
			"name": "Eve",
			"letters": "EEEEE"
		},
		{
			"age": 22,
			"last_login": "2024-10-06",
			"boolean": false,
			"name": "Frank",
			"letters": "DDDD"
		},
		{
			"age": 22,
			"last_login": "2024-09-18",
			"boolean": false,
			"name": "Grace",
			"letters": "EEEEE"
		},
		{
			"age": 16,
			"last_login": "2024-08-12",
			"boolean": true,
			"name": "Hank",
			"letters": "EEEEE"
		},
		{
			"age": 4,
			"last_login": "2024-08-11",
			"boolean": true,
			"name": "Ivy",
			"letters": "A"
		},
		{
			"age": 22,
			"last_login": "2024-09-23",
			"boolean": false,
			"name": "Jack",
			"letters": "EEEEE"
		}
	]
}
</pre>
</td>
<td style="vertical-align:top;">
<pre>
{
  "default": {
    "key": "value",
    "randomNumber": 11,
    "fruits": ["apple","banana","cherry"],
    "date": "2024-10-09 11:21:51",
    "people": [
      { "age": 25, "last_login": "2024-08-25", "boolean": false, "name": "Alice", "letters": "A"    },
      { "age": 11, "last_login": "2024-09-19", "boolean": true , "name": "Barry", "letters": "DDDD" },
      { "age": 9 , "last_login": "2024-09-05", "boolean": true , "name": "Cathy", "letters": "CCC"  },
      { "age": 4 , "last_login": "2024-08-28", "boolean": true , "name": "David", "letters": "EEEEE"},
      { "age": 17, "last_login": "2024-08-13", "boolean": false, "name": "Eve"  , "letters": "EEEEE"},
      { "age": 22, "last_login": "2024-10-06", "boolean": false, "name": "Frank", "letters": "DDDD" },
      { "age": 22, "last_login": "2024-09-18", "boolean": false, "name": "Grace", "letters": "EEEEE"},
      { "age": 16, "last_login": "2024-08-12", "boolean": true , "name": "Hank" , "letters": "EEEEE"},
      { "age": 4 , "last_login": "2024-08-11", "boolean": true , "name": "Ivy"  , "letters": "A"    },
      { "age": 22, "last_login": "2024-09-23", "boolean": false, "name": "Jack" , "letters": "EEEEE"}
    ]
  }
}
</pre>
</td>
</tr>
</table>
