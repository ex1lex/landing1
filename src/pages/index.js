import "./index.css";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
window.jQuery = window.$ = $;

const itemList = Array.from(document.querySelectorAll(".menu__item"));
const container = document.querySelector(".banner__content");
const contentItems = Array.from(document.querySelectorAll(".banner__item"));

const closeItems = (item) => {
  itemList.forEach((menuItem) => {
    if (menuItem === item) {
      openItem(menuItem);
    } else {
      closeItem(menuItem);
    }
  });
};

const closeItem = (item) => {
  const label = item.querySelector(".menu__label");
  const text = item.querySelector(".menu__text");
  item.classList.remove("menu__item_active");
  label.classList.remove("menu__label_active");
  text.classList.remove("menu__text_active");
};

const openItem = (item) => {
  const label = item.querySelector(".menu__label");
  const text = item.querySelector(".menu__text");
  item.classList.add("menu__item_active");
  label.classList.add("menu__label_active");
  text.classList.add("menu__text_active");
};

itemList.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("menu__item_active")) {
      closeItem(item);
    } else closeItems(item);
  });
});

if (window.innerWidth <= 425) {
  $(".banner__content").slick({
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
}

window.addEventListener("resize", () => {
  if (
    window.innerWidth <= 425 &&
    !document.querySelector(".slick-initialized")
  ) {
    $(".banner__content").slick({
      responsive: [
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    });
  } else if (
    window.innerWidth > 425 &&
    document.querySelector(".slick-initialized")
  ) {
    $(".banner__content").slick("unslick");
    if (!document.querySelector(".banner__item")) {
      contentItems.forEach((item) => {
        container.append(item);
      });
    }
  }
});