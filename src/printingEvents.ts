import { showInfoModal } from "./infoModal.js";
import { showInfoModalHover, closeModalHover } from "./hoverModal.js";
import { FormData } from "./interfaces/modalData.js";



const getEventsFromLS = ():FormData[] => {
 

    const LSData:string = localStorage.getItem('calendar')!
    
    const events:FormData[] = JSON.parse(LSData).eventList

    return events
}


const getListOfDaysBetweenTwoDates = (
  startDate: string,
  endDate: string | number
): string[] => {
  const firstDate = new Date(startDate);
  console.log(firstDate)

  const secondDate = new Date(endDate);
  console.log(secondDate)

  const listOfDays = [];

  
  
  for ( let date = firstDate; date <= secondDate; date.setDate(date.getDate() + 1) ) {
    // Añadir la fecha al array de días (clonando para evitar referencia)
    listOfDays.push(
      `${new Date(date).getMonth() + 1}-${new Date(date).getDate()}-${new Date(
        date
      ).getFullYear()}`
    );
    
  }

  
  return listOfDays;
};

const getCircleColor = (eventType: string): string => {
  if (eventType === "Meeting") return "bg-lime-300";
  else if (eventType === "Personal") return "bg-red-300";
  else if (eventType === "Study") return "bg-blue-300";
  else if (eventType === "Other") return "bg-yellow-300";
  else {
    return "";
  }
};

const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number
) => {
  let timer: number;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const printEvents = (): void => {
  //pendiente:
  //gestionar bien formato fechas,
  //crear div para contener cada evento con su texto y bolita,
  // cambiar color bolita segun tipo evento, cambiar color gris si el evento esta pasado.
  // scroll y scale en recuadro del mes (funcion printMonth)

    const events = getEventsFromLS()

    console.log(events)

  events.forEach((event) => {
    const { initialDate, endDate, eventype, description, time, title, id } =
      event;
    const circleColor = getCircleColor(eventype);

    if (initialDate === endDate || endDate === '') {
      const initialDateString = `${
        new Date(initialDate).getMonth() + 1
      }-${new Date(initialDate).getDate()}-${new Date(
        initialDate
      ).getFullYear()}`;
      const ulHtml = document.getElementById(
        `day-${initialDateString}`
      ) as HTMLElement;
      const ulFather = ulHtml.parentElement!;
      if (!ulHtml) return;
      const newLi = document.createElement("li");
      newLi.classList.add("px-1", "rounded-sm", "mb-1");
      newLi.setAttribute("event-id", id.toString());
      const circleDiv = document.createElement("div");
      circleDiv.classList.add(
        "rounded-full",
        "inline-block",
        "w-2",
        "h-2",
        "mr-1",
        circleColor
      );
      const newSpan = document.createElement("span");
      newSpan.textContent = title;
      newLi.appendChild(circleDiv);
      newLi.appendChild(newSpan);
      if (new Date(initialDate).getTime() - Date.now() < 0)
        newLi.classList.add("bg-gray-400");

      newLi.addEventListener("click", () => {
        const eventId = newLi.getAttribute("event-id")!;
        showInfoModal(eventId);
      });
      newLi.addEventListener(
        "mouseenter",
        debounce((event) => {
          const eventId = newLi.getAttribute("event-id")!;
          showInfoModalHover(eventId, event);
        }, 200)
      ); // Adjust the delay as needed

      newLi.addEventListener(
        "mouseleave",
        debounce(() => {
          const eventId = newLi.getAttribute("event-id")!;
          closeModalHover();
        }, 200)
      ); // Adjust the delay as needed

      ulHtml.appendChild(newLi);
    }

    if (initialDate !== endDate && endDate !== '') {
      const listOfDays = getListOfDaysBetweenTwoDates(initialDate, endDate);

      listOfDays.forEach((day) => {
        const ulHtml = document.getElementById(`day-${day}`) as HTMLElement;
        if (!ulHtml) return;
        const newLi = document.createElement("li");
        newLi.classList.add("px-1", "rounded-sm", "mb-1");
        newLi.setAttribute("event-id", id.toString());
        const circleDiv = document.createElement("div");
        circleDiv.classList.add(
          "rounded-full",
          "inline-block",
          "w-2",
          "h-2",
          "mr-1",
          circleColor
        );
        const newSpan = document.createElement("span");
        newSpan.textContent = title;
        newLi.appendChild(circleDiv);
        newLi.appendChild(newSpan);
        if (new Date(initialDate).getTime() - Date.now() < 0)
          newLi.classList.add("bg-gray-400");

        newLi.addEventListener("click", () => {
          const eventId = newLi.getAttribute("event-id")!;
          showInfoModal(eventId);
        });
        newLi.addEventListener(
          "mouseenter",
          debounce((event) => {
            const eventId = newLi.getAttribute("event-id")!;
            showInfoModalHover(eventId, event);
          }, 200)
        ); // Adjust the delay as needed

        newLi.addEventListener(
          "mouseleave",
          debounce(() => {
            const eventId = newLi.getAttribute("event-id")!;
            closeModalHover();
          }, 200)
        ); // Adjust the delay as needed

        ulHtml.appendChild(newLi);
      });
    }
  });
};
