let Body = document.querySelector("body");
let Logo = document.querySelector(".logo");
let SearchBar = document.querySelector(".search-bar");
let NavSearch = document.querySelector(".nav-search");
let All = document.querySelector("#all");
let SearchButton = document.querySelector(".search-button");
let NavAddressBorder = document.querySelector(".nav-address");
let ChangeAdd = document.querySelector(".change_Add");
let Changeadd = document.querySelector(".change_add");
let ChangeAddBox = document.querySelector(".change_add_box");
let SeeAdd = document.querySelector(".see_add");
let ApplyAdd = document.querySelector(".Apply_add");
let InputCity = document.querySelector(".input_city");
let DoneAdd = document.querySelector(".Done_add");
let SelectCity = document.querySelector(".Select_city");
let Error_ = document.querySelector(".error");
let CityNames = document.querySelector(".city_names");
let FindCity = document.querySelector("#findCity");
let AddSecond = document.querySelector(".add-second");
let LanguageSelect = document.querySelector(".language-select");
let Popup1 = document.querySelector(".popup-1");
let Input = document.getElementsByTagName("input");
let LanCode = document.querySelector("#lan_code");
let ChangeLang = document.querySelector(".change_lang");
let SignIn = document.querySelector(".sign-in");
let Popup2 = document.querySelector(".popup-2");
let InfoAmazonlogo = document.querySelector(".info_amazon_logo");
let NavLogo = document.querySelector(".nav_logo");
let BackTop = document.querySelector(".back_top");
let FirstLeft = document.querySelector("#first_left");
let FirstRight = document.querySelector("#first_right");
let SecondLeft = document.querySelector("#second_left");
let SecondRight = document.querySelector("#second_right");
let MainBox1 = document.querySelector("#main_box1");
let MainBox2 = document.querySelector("#main_box2");
let Popup3 = document.querySelector(".popup-3");
let LanSelect = document.querySelector(".lan_select");
let ChangeLangFoot = document.querySelector(".change_lang_foot");
let InfoLan = document.querySelector(".info_lan");
let BackLeft = document.querySelector(".back_left");
let BackRight = document.querySelector(".back_right");
let BackGroundImage = document.querySelector(".background_image");
let MenuIcon = document.querySelector(".menu_icon");
let Popup4 = document.querySelector(".popup-4");
let Pop4Background = document.querySelector(".pop4_background");
let CloseMenu = document.querySelector(".close_menu");
let MorePara1 = document.querySelector(".more_para1");
let SeeAll1 = document.querySelector(".see_all1");
let SeeAll2 = document.querySelector(".see_all2");
let SeeLess1 = document.querySelector(".see_less1");
let SeeLess2 = document.querySelector(".see_less2");
let MorePara2 = document.querySelector(".more_para2");

All.addEventListener("click", () => {
  All.style.border = "3px solid rgb(242, 155, 5)";
});
SearchButton.addEventListener("click", () => {
  SearchButton.style.border = "3px solid rgb(242, 155, 5)";
});
const RemoveNavBorder = () => {
  NavSearch.style.border = "none";
  All.style.border = "none";
  SearchButton.style.border = "none";
};
Logo.addEventListener("click", () => {
  RemoveNavBorder();
});
NavAddressBorder.addEventListener("click", () => {
  ChangeAdd.style.display = "flex";
  Body.style.overflowY = "hidden";
});
Changeadd.addEventListener("click", () => {
  ChangeAdd.style.display = "none";
  CityNames.style.display = "none";
  Body.style.overflowY = "auto";
});
ChangeAddBox.addEventListener("click", () => {
  ChangeAdd.style.display = "flex";
});
SeeAdd.addEventListener("click", () => {
  SeeAdd.style.border = "3px solid #3ec0f2";
  ApplyAdd.style.border = "1px solid #d7dbdb";
  InputCity.style.border = "1.5px solid rgb(68, 68, 68)";
  DoneAdd.style.border = "none";
  SelectCity.style.border = "1px solid #d7dbdb";
});
ApplyAdd.addEventListener("click", () => {
  ApplyAdd.style.border = "3px solid #3ec0f2";
  InputCity.style.border = "1.5px solid rgb(68, 68, 68)";
  DoneAdd.style.border = "none";
  SelectCity.style.border = "1px solid #d7dbdb";
  SeeAdd.style.border = "none";
  if (InputCity.innerText === "") {
    Error_.style.display = "flex";
  } else {
    Error_.style.display = "none";
  }
});
InputCity.addEventListener("click", () => {
  InputCity.style.border = "3px solid #3ec0f2";
  DoneAdd.style.border = "none";
  SelectCity.style.border = "1px solid #d7dbdb";
  SeeAdd.style.border = "none";
  ApplyAdd.style.border = "1px solid #d7dbdb";
  Error_.style.display = "none";
});
DoneAdd.addEventListener("click", () => {
  SelectCity.style.border = "1px solid #d7dbdb";
  SeeAdd.style.border = "none";
  ApplyAdd.style.border = "1px solid #d7dbdb";
  InputCity.style.border = "1.5px solid rgb(68, 68, 68)";
  if (FindCity.innerText !== "Ship outside the US") {
    AddSecond.innerText = FindCity.innerText;
  }
});
let remove = true;
SelectCity.addEventListener("click", () => {
  SelectCity.style.border = "3px solid #3ec0f2";
  SeeAdd.style.border = "none";
  ApplyAdd.style.border = "1px solid #d7dbdb";
  InputCity.style.border = "1.5px solid rgb(68, 68, 68)";
  DoneAdd.style.border = "none";
  CityNames.style.display = "flex";
  if (remove === true) {
    for (let name in Contryname) {
      let NewCountries = document.createElement("div");
      NewCountries.setAttribute("class", "All_names");
      NewCountries.innerText = Contryname[name];
      CityNames.appendChild(NewCountries);
      NewCountries.addEventListener("click", () => {
        NewCountries.style.backgroundColor = "rgb(186, 209, 245)";
        CityNames.style.display = "none";
        FindCity.innerText = Contryname[name];
      });
    }
    remove = false;
  }
});
LanguageSelect.addEventListener("mouseover", () => {
  setTimeout(() => {
    Popup1.style.display = "flex";
    Popup2.style.display = "none";
    ChangeLang.style.display = "flex";
  }, 500);
});
ChangeLang.addEventListener("mouseover", () => {
  Popup1.style.display = "none";
  Popup2.style.display = "none";
  ChangeLang.style.display = "none";
});
Popup1.addEventListener("mouseover", () => {
  Popup1.style.display = "flex";
  ChangeLang.style.display = "flex";
});
Popup1.addEventListener("mouseout", () => {
  Popup1.style.display = "none";
  ChangeLang.style.display = "none";
});
LanguageSelect.addEventListener("mouseout", () => {
  Popup1.style.display = "none";
  ChangeLang.style.display = "none";
});
for (let input of Input) {
  input.addEventListener("click", (e) => {
    LanCode.innerText = e.target.value;
    Popup1.style.display = "none";
    ChangeLang.style.display = "none";
    Popup3.style.display = "none";
    ChangeLangFoot.style.display = "none";
    Body.style.overflowY = "auto";
    for (let name in LanguageList) {
      if (e.target.value === LanguageList[name]) {
        InfoLan.innerText = name;
      }
    }
  });
}
SearchBar.addEventListener("click", () => {
  NavSearch.style.border = "3px solid rgb(242, 155, 5)";
  ChangeLang.style.display = "flex";
});
SignIn.addEventListener("mouseover", () => {
  setTimeout(() => {
    Popup2.style.display = "flex";
    Popup1.style.display = "none";
    ChangeLang.style.display = "flex";
  }, 500);
});
SignIn.addEventListener("mouseout", () => {
  Popup2.style.display = "none";
  ChangeLang.style.display = "none";
});
Popup2.addEventListener("mouseover", () => {
  Popup2.style.display = "flex";
  ChangeLang.style.display = "flex";
});
Popup2.addEventListener("mouseout", () => {
  Popup2.style.display = "none";
  ChangeLang.style.display = "none";
});
LanSelect.addEventListener("click", () => {
  setTimeout(() => {
    Popup3.style.display = "flex";
    ChangeLangFoot.style.display = "flex";
    Body.style.overflowY = "hidden";
  }, 500);
});
ChangeLangFoot.addEventListener("click", () => {
  Popup3.style.display = "none";
  ChangeLangFoot.style.display = "none";
  Body.style.overflowY = "auto";
});
NavLogo.addEventListener("click", () => {
  location.reload();
});
InfoAmazonlogo.addEventListener("click", () => {
  location.reload();
  scrollTo(0, 0);
});
BackTop.addEventListener("click", () => {
  scrollTo(0, 0);
});
let x1 = 0;
let x2 = 0;
FirstLeft.addEventListener("click", () => {
  if (x1 > 0) {
    MainBox1.scrollTo(x1 - 300, 0);
    x1 -= 300;
  }
});
FirstRight.addEventListener("click", () => {
  if (x1 < 1000) {
    MainBox1.scrollTo(x1 + 300, 0);
    x1 += 300;
  }
});
SecondLeft.addEventListener("click", () => {
  if (x2 > 0) {
    MainBox2.scrollTo(x2 - 300, 0);
    x2 -= 300;
  }
});
SecondRight.addEventListener("click", () => {
  if (x2 < 250) {
    MainBox2.scrollTo(x2 + 300, 0);
    x2 += 300;
  }
});
BackRight.addEventListener("click", () => {
  if (BackGroundImage.scrollLeft >= 7600) {
    BackGroundImage.scrollLeft = -7600;
  } else {
    BackGroundImage.scrollLeft += 1521;
  }
});
BackLeft.addEventListener("click", () => {
  if (BackGroundImage.scrollLeft <= 0) {
    BackGroundImage.scrollLeft = 7603;
  } else {
    BackGroundImage.scrollLeft -= 1521;
  }
});
MenuIcon.addEventListener("click", () => {
  Popup4.style.display = "flex";
  Pop4Background.style.display = "flex";
  Body.style.overflow = "hidden";
  setTimeout(() => {
    CloseMenu.style.display = "flex";
  }, 500);
});
Pop4Background.addEventListener("click", () => {
  Popup4.style.display = "none";
  Pop4Background.style.display = "none";
  CloseMenu.style.display = "none";
  Body.style.overflowY = "auto";
});
CloseMenu.addEventListener("click", () => {
  Popup4.style.display = "none";
  Pop4Background.style.display = "none";
  CloseMenu.style.display = "none";
  Body.style.overflowY = "auto";
});
SeeAll1.addEventListener("click", () => {
  SeeAll1.style.display = "none";
  MorePara1.style.display = "flex";
});
SeeLess1.addEventListener("click", () => {
  SeeAll1.style.display = "flex";
  MorePara1.style.display = "none";
});
SeeAll2.addEventListener("click", () => {
  SeeAll2.style.display = "none";
  MorePara2.style.display = "flex";
});
SeeLess2.addEventListener("click", () => {
  SeeAll2.style.display = "flex";
  MorePara2.style.display = "none";
});
