from odoo.http import Controller, request, route


class WebsiteTodoApp(Controller):

    @route(['/actor_app'], type='http', auth="public", website=True)
    def actor_app(self):
        values = {}
        return request.render("actor.actor_app", values)

