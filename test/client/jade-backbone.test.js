describe('jade-backbone', function () {
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
    stemCell.stackUpgrade('devtools-browserify', next)
  })
  before(function (next) {
    stemCell.stackUpgrade('devtools-less', next)
  })
  before(function (next) {
    stemCell.stackUpgrade('devtools-assets', next)
  })
  before(function (next) {
    stemCell.stackUpgrade('jade-backbone', next)
  })
  after(function (next) {
    stemCell.removeMockedFolder(next)
  })
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
