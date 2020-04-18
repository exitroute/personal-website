---
path: "/projects/ruedev"
category: "project-post"
date: "2019-06-16"
title: "Agency"
role: "Founder"
tags:
  [
    "project",
    "lowcode",
    "nocode",
    "bizdev",
    "agency",
    "concept",
    "training",
    "development",
  ]
position: "3"
---

**An agency that targets low value markets and creates jobs for workers entering the development job market.**

This project is a reaction to my experience as a "late entry level" developer and addresses **three** problems:

- the skills gap between what companies in Berlin need from entry developers and what entry level developers have after a training course,
- the shortage of mid and senior level developers,
- the impact of the 4th industrial revolution on small businesses in Berlin and Brandenburg.

It works these business areas:

- develop solutions for freelancers, small businesses and organisations outside of the Berlin startup bubble,
- provide long term support to these organisations so that they get the most from their solution,
- give post bootcamp developers the work experience they need to get that first big job,
- train and support experienced juniors to become competent mid or senior level developers.

The project has been pitched at one of Berlin's harshest destroyer of startup dreams, who gave it guarded support and encouraged me to develop this idea.

---

### Details

Below is a JSON object that describes the organisation in terms of:

- Staff as `members`
- Mission, vision, business drivers and themes, initiatives and epics
- Sales, contracts and projects
- Finance
- Marketing

```
{
  "members": {
    "id": {
      "name": "",
      "role": [""],
      "dates": [{
        "joined": "",
        "left": ""
      }],
      "location": "",
      "notes": [],
      "skills": {},
      "costToBusiness": []
    }
  },
  "vision": [{ "id": "This is the first vision statement" }],
  "mission": [{ "id": "This is the first mission statement" }],
  "drivers": {
    "description": "",
    "finance": {
      "description": "",
      "themes": [{ "id": "This is a finance theme" }]
    },
    "market": {
      "description": "",
      "themes": [{ "id": "This is a market theme" }]
    },
    "people": {
      "description": "",
      "themes": [{ "id": "This is a people theme" }]
    },
    "product": {
      "description": "",
      "themes": [{ "id": "This is a product theme" }]
    }
  },
  "initiatives": [{ "id": "This is an initiative"}],
  "epics": [{"id": "This is an epic"}],
  "lead": {
    "id": {
      "name": "",
      "description": "",
      "role": "",
      "organisation": ""
    }
  },
  "opportunity": {},
  "offer": {},
  "contract": {
    "projects": []
  },
  "project": {
    "id": {
      "title": "",
      "customer": "",
      "status": "",
      "owner": "",
      "team": "",
      "overview": {
        "situation": "",
        "task": "",
        "action": "",
        "result": ""
      },
      "tool": {},
      "link": {}
    }
  },
  "finance": {
    "balance": [],
    "invoice": {
      "invoiceId": {
        "salesLedger": "",
        "purchaseLedger": "",
        "amount": "",
        "pending": "",
        "paid": ""
      }
    },
    "wage": {},
    "standingOrders": {
      "costs": {
        "wages": {},
        "rent": {},
        "subscriptions": {}
      },
      "income": {
        "funding": {}
      }
    }
  },
  "marketing": {
    "project": {
      "id": {
        "title": "",
        "objective": "",
        "type": "",
        "audience": "",
        "cost": {
          "planned": [],
          "actual": []
        },
        "metrics": {
          "desired": {},
          "achieved": {}
        }
      }
    }
  }
}
```
