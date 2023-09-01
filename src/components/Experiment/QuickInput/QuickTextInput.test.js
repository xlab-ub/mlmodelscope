import React from "react";
import {fireEvent, render} from "@testing-library/react";
import QuickTextInput from "./QuickTextInput";
import Task from "../../../helpers/Task";
import {image_classification} from "../../../helpers/TaskIDs";
import {makeTestModel} from "../../ModelDetailPage/MakeTestModel";

describe("QuickTextInput", () => {
    let result;
    let submitMock;

    describe('Renders', () => {
        beforeEach(() => {
            result = render(
                <QuickTextInput
                    onSubmit={submitMock}
                    model={makeTestModel(image_classification)}
                />
            );
        });

        it("a root element with the class name 'quick-text-input'", () => {
            const {container} = result;
            const rootElement = container.firstChild;
            expect(rootElement).toHaveClass("quick-text-input");
        });

        it("a heading for the input", () => {
            const {getByText} = result;
            expect(getByText("Try this model")).toBeInTheDocument();
        });

        it("a subheading for the given task of the input", () => {
            const {getByText} = result;

            expect(getByText(Task.image_classification.inputText)).toBeInTheDocument();
        });

        it("help text for what to enter for the input", () => {
            const {container} = result;

            const helpText = container.querySelector(".quick-text-input__help-text");

            expect(helpText).toBeInTheDocument();
        });

        describe('with tabs', () => {
            it('in a tab container', () => {
                const {container} = result;

                const tabContainer = container.querySelector(".quick-text-input__tabs");

                expect(tabContainer).toBeInTheDocument();
            });

            it('that have titles', () => {
                const {container} = result;
                const titleContainer = container.querySelector(".quick-text-input__tab-titles");
                const titles = titleContainer.querySelectorAll('button.quick-text-input__tab-title');

                expect(titles.length).toBe(3);
                expect(titles[0]).toHaveTextContent('Sample inputs');
                expect(titles[1]).toHaveTextContent('Upload');
                expect(titles[2]).toHaveTextContent('Text');
            });
        });

        it("a text input", () => {
            const {container} = result;

            const input = container.querySelector(".quick-text-input__input");

            expect(input).toBeInTheDocument();
        });

        it("can change the text input", () => {
            const {container} = result;

            const input = container.querySelector(".quick-text-input__input");

            fireEvent.change(input, {target: {value: "test"}});

            expect(input.value).toBe("test");
        });

        it("has a submit button", () => {
            const {container} = result;

            const submitButton = container.querySelector(
                ".quick-text-input__submit-button"
            );

            expect(submitButton).toBeInTheDocument();
        });

    });

    describe('submit button', () => {
        beforeEach(() => {
            submitMock = jest.fn();

            result = render(
                <QuickTextInput
                    onSubmit={submitMock}
                    model={makeTestModel(image_classification)}
                />
            );
        });

        it("calls the onSubmit prop when clicked", () => {
            const {container} = result;

            const input = container.querySelector(".quick-text-input__input");

            fireEvent.change(input, {target: {value: "test"}});
            const submitButton = container.querySelector(
                ".quick-text-input__submit-button"
            );

            fireEvent.click(submitButton);

            expect(submitMock).toHaveBeenCalled();
        });

        it("passes along the current text value when submitting", () => {
            const {container} = result;

            const input = container.querySelector(".quick-text-input__input");

            fireEvent.change(input, {target: {value: "test"}});

            const submitButton = container.querySelector(
                ".quick-text-input__submit-button"
            );

            fireEvent.click(submitButton);

            expect(submitMock).toHaveBeenCalledWith("test");
        });

        it("is disabled when the textbox is empty", () => {
            const {container} = result;

            const submitButton = container.querySelector(
                ".quick-text-input__submit-button"
            );

            expect(submitButton).toBeDisabled();
        });

        it("is enabled once the textbox is not empty", () => {
            const {container} = result;

            const input = container.querySelector(".quick-text-input__input");

            fireEvent.change(input, {target: {value: "test"}});

            const submitButton = container.querySelector(
                ".quick-text-input__submit-button"
            );

            expect(submitButton).not.toBeDisabled();
        });
    });

    it("can give the input a default value", () => {
        const {container} = render(
            <QuickTextInput
                onSubmit={submitMock}
                model={makeTestModel(image_classification)}
                defaultValue="test"
            />
        );

        const input = container.querySelector(".quick-text-input__input");

        expect(input.value).toBe("test");
    });


    it("when passing in hideHeader, the header is not rendered", () => {
        const {container} = render(
            <QuickTextInput
                onSubmit={submitMock}
                model={makeTestModel(image_classification)}
                hideHeader
            />
        );

        const header = container.querySelector(".quick-text-input__title");
        const subtitle = container.querySelector(".quick-text-input__subtitle");

        expect(header).not.toBeInTheDocument();
        expect(subtitle).not.toBeInTheDocument();
    });
});
