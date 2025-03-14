from odoo import fields, models


class Actor(models.Model):
    _name = "actor.actor"
    _description = "Actor"

    name = fields.Char(string="Name", required=True)
    email = fields.Char(string="Email")
    phone = fields.Char(string="Phone")
    age = fields.Integer(string="Age")
    role = fields.Selection([
        ("actor", "Actor"),
        ("actress", "Actress"),
        ("director", "Director"),
    ], string="Role", default="actor")
