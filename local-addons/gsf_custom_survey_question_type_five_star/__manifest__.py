{
    "name": "GSF - Personalizaciones a Preguntas tipo 5 Estrellas en Encuestas",
    "version": "17.0.1.0.0",
    "author": "Grupo San Francisco, Gerencia de Telemática",
    "depends": [
        "gsf_custom_survey",
        "survey_question_type_five_star",
    ],
    "assets": {
        "survey.survey_assets": [
            "gsf_custom_survey_question_type_five_star/static/src/scss/survey_overrides.scss",
        ],
    },
    "auto_install": True,
    "installable": True,
}
