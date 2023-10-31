mocha.setup('bdd');

describe('toggleText', function() {
    it('should toggle the display of moreText element', function() {
      var moreText = document.createElement('div');
      moreText.id = 'moreText';
      moreText.style.display = 'none';
  
      document.body.appendChild(moreText);
  
      toggleText();
  
      chai.expect(moreText.style.display).to.equal('block');
  
      toggleText();
  
      chai.expect(moreText.style.display).to.equal('none');
  
      document.body.removeChild(moreText);
    });
  });

  

  describe('scrollFunction', function() {
    it('should set the font size of the header element based on window.pageYOffset', function() {
      var header = document.createElement('div');
      header.id = 'header';
      header.style.fontSize = '90px';
  
      document.body.appendChild(header);
  
      window.pageYOffset = 60;
  
      scrollFunction();
  
      chai.expect(header.style.fontSize).to.equal('30px');
  
      window.pageYOffset = 40;
  
      scrollFunction();
  
      chai.expect(header.style.fontSize).to.equal('90px');
  
      document.body.removeChild(header);
    });
  });


  mocha.run(function(failures) {
    console.log(`Запуск завершено з ${failures} помилками`);
  });