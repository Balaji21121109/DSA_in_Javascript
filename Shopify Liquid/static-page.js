// Static Page Collapsible Tab
function collapsibleToggle(show) {
    let collapsibleContent = document.querySelectorAll('.collapsible__content-wrapper-md');
    collapsibleContent.forEach((item, i) => {
      item.style.display = "none";
    });
  
    let showCollapsibleContent = document.getElementById(show);
    showCollapsibleContent.style.display = 'block';
  }
  
  let orderTabs = document.querySelectorAll(".quick__link-tab");
  for (let i = 0; i < orderTabs.length; i++) {
    orderTabs[0].classList.add("tab_active");
    orderTabs[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("tab_active");
      current[0].className = current[0].className.replace(" tab_active", "");
      this.className += " tab_active";
      console.log(this.className, "this.className")
    });
  }