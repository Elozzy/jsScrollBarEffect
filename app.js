document.addEventListener(
    "scroll",
    function() {
      let scrollTop =
        document.documentElement["scrollTop"] || document.body["scrollTop"];
      let scrollBottom =
        (document.documentElement["scrollHeight"] ||
          document.body["scrollHeight"]) - document.documentElement.clientHeight;
      scrollPercent = scrollTop / scrollBottom * 100 + "%";
      document
        .getElementById("_scrollBar")
        .style.setProperty("--scroll", scrollPercent);
    },
    { passive: true }
  );