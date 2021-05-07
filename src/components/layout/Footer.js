import React from "react";

function FooterLayout() {
  return (
    <>
      <div class="d-flex flex-column">
        <footer class="footer">
          <div>
            <a href="https://coreui.io">CoreUI</a>
            <span>&copy; 2020 creativeLabs.</span>
          </div>
          <div class="ml-auto">
            <span>Powered by</span>
            <a href="https://coreui.io">CoreUI</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FooterLayout;
