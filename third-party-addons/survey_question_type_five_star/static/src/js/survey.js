/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import "@survey/js/survey_form";

publicWidget.registry.SurveyFormWidget.include({
    events: Object.assign({}, publicWidget.registry.SurveyFormWidget.prototype.events, {
        "click .rate > label": "_onClickFiveStarLabel",
    }),

    _onClickFiveStarLabel: function (event) {
        if (this.readonly) {
            return;
        }
        var target = event.target;
        var label_items = $(target).parent().find("label");
        var value = label_items.length - $(target).index();
        
        label_items.removeClass("checked fa-star").addClass("fa-star-o");
        label_items
            .slice($(target).index())
            .addClass("checked fa-star")
            .removeClass("fa-star-o");
            
        var $input = $(target).parent().find("input");
        $input.val(value);
        
        $input.trigger("change");
    },

    _prepareSubmitValues: function (formData, params) {
        this._super.apply(this, arguments);
        this.$("[data-question-type]").each(function () {
            switch ($(this).data("questionType")) {
                case "star_rate":
                    params[this.name] = this.value;
                    break;
            }
        });
    },
});