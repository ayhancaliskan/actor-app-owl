# Copyright 2024 Eezee-IT (<http://www.eezee-it.com> - admin@eezee-it.com)
# License LGPL-3.0 or later (https://www.gnu.org/licenses/lgpl.html).
{
    "name": "Actor App",
    "version": "18.0.0.0.0",
    "author": "Eezee-It",
    "license": "LGPL-3",
    "category": "hidden",
    "depends": [],
    "data": [
        "templates/actor_templates.xml",
    ],
    "assets": {
        'web.assets_frontend': [
             'actor/static/src/**/*',
        ],
    },
    "installable": True,
    "application": True,
}
