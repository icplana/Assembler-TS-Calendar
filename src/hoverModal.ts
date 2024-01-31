import { FormData } from "./interfaces/modalData";

export const closeModalHover = () => {
  const modal = document.getElementById("infoModalHover")!;
  modal.classList.add("hidden");
};

export const showInfoModalHover = (id: string, eventE: MouseEvent) => {

  // Retrieve JSON data from local storage
  const storedData = localStorage.getItem("calendar");

  if (storedData) {
    try {
      const jsonData = JSON.parse(storedData);

      // Find the event with the provided id in the eventList
      const event = jsonData.eventList.find(
        (event: FormData) => event.id.toString() === id
      );

      if (event) {
        // If the event is found, log its details

        // Call paintDom() or perform other actions as needed
        paintDom(
          event.title,
          event.initialDate,
          event.endDate,
          event.time,
          event.description,
          event.eventType,
          event.id,
          eventE
        );
      } else {
        // If the event is not found, log an error or handle accordingly
        console.error("Event not found with id:", id);
      }
    } catch (error) {
      console.error("Error parsing JSON data from local storage:", error);
    }
  } else {
    // If no data is found in local storage, log an error or handle accordingly
    console.error("No data found in local storage with key 'calendar'");
  }
};

const paintDom = (
  infoModalTitleValue: string,
  infoInitialDateValue: string,
  infoModalEndDateValue: string,
  infoModalTimeValue: string,
  infoModalDescriptionValue: string,
  infoModalEventTypeValue: string,
  idValue: number,
  eventE?: MouseEvent
) => {
  const modal = document.getElementById("infoModalHover")!;

  const posY = eventE?.pageY!;
  const posX = eventE?.pageX!;
  const screenWidth = window.screen.width / 2;
  const screenHeight = window.screen.height / 2;
  modal.style.left = `${posX}px`;
  modal.style.top = `${posY}px`;

  if (posY > screenHeight) {
    modal.style.transform = `translateY(-100%)`;
  }

  if (posX > screenWidth) {
    modal.style.transform = `translateX(-100%)`;
  }

  modal.classList.remove("hidden");

  const infoModalTitle = document.getElementById("infoModalTitleHover")!;
  const infoModalInitialDate = document.getElementById(
    "infoModalInitialDateHover"
  )!;

  infoModalTitle.textContent = infoModalTitleValue;
  infoModalInitialDate.textContent = infoInitialDateValue;
};
