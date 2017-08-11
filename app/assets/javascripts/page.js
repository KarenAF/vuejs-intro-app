document.addEventListener("DOMContentLoaded",function(event){
  var app = new Vue({
    el: "#app",
    data: {
      message: "Waddup Vue!",
      reviews: [
        "one little monkey sitting on a tree",
        "two little babies eating banana",
        "three big bugs yuck"
      ],
      newReview: ""
    },
    methods:{
      addReview: function() {
        this.reviews.push(this.newReview);
      }
    }
  });
});