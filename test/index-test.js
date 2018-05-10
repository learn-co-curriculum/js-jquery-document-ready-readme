describe('Web page', () => {
  it('contains a script element importing script.js', function() {
    let scripts = Array.from(document.querySelectorAll("body > script"));
    let scriptNames = scripts.map( e => e.getAttribute("src") );
    expect(scriptNames).toContain("script.js")
  });
});
