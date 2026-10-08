from odoo import fields, models


class SurveyQuestion(models.Model):
    _inherit = "survey.question"

    is_dropdown = fields.Boolean(
        string="Show simple choice as selection field",
        help="If active, 'Simple choice' options will be shown as a selection field instead of radio buttons.",
    )
