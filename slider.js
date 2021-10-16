function Slider() {
    this.imagesUrls = [];
    this.currentImageIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;
    this.start = function (elId) {
      const that = this;
  
      const elSelector = '#' + elId;
      const el = document.querySelector(elSelector);
  
  
  
      this.showPrevBtn = el.querySelector(".show-prev-btn");
      this.showNextBtn = el.querySelector(".show-next-btn");
      this.slideImage = el.querySelector(".slide-img");
  
  
      //subscribe to events 
      this.showPrevBtn.addEventListener("click", function (e) {
        that.onShowPrevBtnClick(e);
      }),
      this.showNextBtn.addEventListener("click", function (e) {
          that.onShowNextBtnClick(e);
        }),
        //create images array 
      this.imagesUrls.push("https://sun9-21.userapi.com/impg/ZHJzjVLkxj3y--qBuSgTjwNW31JNzkTlWriUNQ/XE-5MqFQINg.jpg?size=2560x1717&quality=96&sign=ac5560e52fb489fcde394781e9ba3d2e&type=album");
      this.imagesUrls.push("https://sun9-51.userapi.com/impg/DRSVVvqeP4uKhgYYRwLglYSKZz5ed9HDm2mitw/ELJYWifOxGg.jpg?size=2560x1717&quality=96&sign=7b49bfcd7a0b1a562f65fe4754fd3bf5&type=album");
      this.imagesUrls.push("https://sun9-20.userapi.com/impg/esJ_GROO2gAIhf2yNE9iO6OLd16PCy2e9SnkvQ/1lCoZnFNoAE.jpg?size=2560x1717&quality=96&sign=9b64efd3e0a775dab968a0fffad69a0e&type=album");
      this.imagesUrls.push("https://sun9-68.userapi.com/impg/t7r_dfVQ9dujehfVW6dbksc9cJCzFT9nBvEvKg/m1ilZqr91FM.jpg?size=2560x1717&quality=96&sign=43e65cc90759155d1fa367ae1bf67912&type=album");
      this.imagesUrls.push("https://sun9-55.userapi.com/impg/aRH_aseopYFVPLtlm9bLOdQAo0DD7zs8-RNztw/cLrkgyayFno.jpg?size=2560x1717&quality=96&sign=c75a18b8ca7167a29f29a71a1c7a9b3b&type=album");
  
      this.slideImage.src = this.imagesUrls[this.currentImageIndex];
      this.showPrevBtn.disabled = true;
  
    };
    this.onShowPrevBtnClick = function (e) {
      this.currentImageIndex--;
      this.slideImage.src = this.imagesUrls[this.currentImageIndex];
      this.showNextBtn.disabled = false;
  
      if (this.currentImageIndex === 0) {
        this.showPrevBtn.disabled = true;
      }
    };
    this.onShowNextBtnClick = function (e) {
      this.currentImageIndex++;
      this.slideImage.src = this.imagesUrls[this.currentImageIndex];
      this.showPrevBtn.disabled = false;
  
      //disable next button if need
      if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
        this.showNextBtn.disabled = true;
      }
    };
  }
  
  
  
  const sliderFactory = {
    createNewSlider: function () {
      const newSlider = new Slider();
      return newSlider;
    }
  };
  
  
  
  
  
  