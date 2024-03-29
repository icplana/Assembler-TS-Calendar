export const elements = {
    languageSelect: document.getElementById('language') as HTMLSelectElement,
    monthTitle: document.getElementById("month-title") as HTMLHeadingElement,
    btnPrev: document.getElementById("btn-prev") as HTMLButtonElement,
    btnNext: document.getElementById("btn-next") as HTMLButtonElement,
    btnAddEvent: document.getElementById("add-event-btn") as HTMLButtonElement,
    btnToday: document.getElementById("today-btn") as HTMLButtonElement,
    weekDiv: document.getElementById("week") as HTMLDivElement,
    monthDays: document.getElementById("month-days") as HTMLOListElement,

    //modal elements
    modal: document.getElementById("modal") as HTMLDivElement,
    modalForm: document.getElementById("myForm") as HTMLFormElement,
    modalTitle: document.getElementById("modalTitle") as HTMLInputElement,
    modalTitleError: document.getElementById("modalTitleError") as HTMLElement,
    modalTitleErrorFill: document.getElementById("modalTitleErrorFill") as HTMLElement,
    modalInitialDate: document.getElementById("modalInitialDate") as HTMLInputElement,
    modalInitialDateError: document.getElementById("modalInitialDateError") as HTMLInputElement,
    modalEndDateCheck: document.getElementById("modalEndateCheck") as HTMLInputElement,
    modalEndDateContainer: document.getElementById("endDateContainer") as HTMLDivElement,
    modalEndDateInput: document.getElementById("modalEndate") as HTMLInputElement,
    modalTimeCheck: document.getElementById("modalTimeCheck") as HTMLInputElement,
    modalTimeLabel: document.getElementById("modalTimeLabel") as HTMLLabelElement,
    modalTimeSelect: document.getElementById("timeInput") as HTMLInputElement,
    modalComment: document.getElementById("comment") as HTMLTextAreaElement,
    modalEvent: document.getElementById("modalEvent") as HTMLInputElement,
    modalBtnCancel: document.getElementById('cancelModalButton') as HTMLButtonElement,
    modalBtnClose: document.getElementById("closeModalButton") as HTMLButtonElement,

    //info modal elements
    modalInfo: document.getElementById("infoModal") as HTMLDivElement,
    modalInfoTitle: document.getElementById("infoModalTitle") as HTMLParagraphElement,
    modalInfoInitialDate: document.getElementById("infoModalInitialDate") as HTMLParagraphElement,
    modalInfoEndDate: document.getElementById("infoModalEndDate") as HTMLParagraphElement,
    modalInfoTime: document.getElementById("infoModalTime") as HTMLParagraphElement,
    modalInfoDescription: document.getElementById("infoModalDescription") as HTMLParagraphElement,
    modalInfoEvent: document.getElementById("infoModalEventType") as HTMLParagraphElement,
    modalInfoBtnDelete: document.getElementById("deleteButton") as HTMLButtonElement,
    modalInfoBtnClose: document.getElementById("closeInfoModalButton") as HTMLButtonElement,

    //hover modal elements
    hoverModal: document.getElementById("infoModalHover") as HTMLDivElement,
    hoverModalTitle: document.getElementById("infoModalTitleHover") as HTMLParagraphElement,
    hoverModalInitialDate: document.getElementById("infoModalInitialDateHover") as HTMLParagraphElement
};