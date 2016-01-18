describe('angular1', function () {
  var stemCell = new StemSkeleton(require(process.cwd() + '/stemskeleton.json'))
  before(function (next) {
    stemCell.mockTestFolder(next)
  })
  before(function (next) {
    stemCell.stackUpgrade('devtools', next)
  })
  before(function (next) {
    stemCell.stackUpgrade('devtools-client', next)
  })
  before(function (next) {
    stemCell.stackUpgrade('devtools-webpack', next)
  })
  before(function (next) {
    stemCell.stackUpgrade('devtools-less', next)
  })
  before(function (next) {
    stemCell.stackUpgrade('devtools-assets', next)
  })
  before(function (next) {
    stemCell.stackUpgrade('angular1', next)
  })
  /*after(function (next) {
    stemCell.removeMockedFolder(next)
  })*/
  it('$angel build', function (next) {
    stemCell.exec('angel build', function (err, stdout) {
      if (err) return next(err)
      next()
    })
  })
  it('$angel watch', function (next) {
    var child = stemCell.exec('angel watch')
    child.on('data', function (chunk) {
      // TODO buffer until expect successfully
      stemCell.forceExit(child, next)
    })
  })
})
