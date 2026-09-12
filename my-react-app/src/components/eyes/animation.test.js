import test from 'node:test'
import assert from 'node:assert/strict'
import { PATHS, nextFrame, frameAt } from './animation.js'

test('every original pose can track every target pose', () => {
  const frames = [...new Set(Object.values(PATHS).flat())]
  for (const start of frames) for (const target of frames) {
    let frame = start
    for (let i = 0; i < 40; i++) frame = nextFrame(frame, target)
    assert.equal(frame, target)
  }
})
test('cursor reversals retrace frames and can stop halfway', () => {
  assert.equal(nextFrame(5,3),4)
  assert.equal(nextFrame(4,3),3)
  assert.equal(nextFrame(3,3),3)
  assert.equal(nextFrame(3,6),4)
  assert.equal(nextFrame(15,12),14)
  assert.equal(nextFrame(5,16),4)
})
test('cursor maps proportionally to intermediate poses on both sides', () => {
  assert.equal(frameAt(0,400),9)
  assert.equal(frameAt(100,400),5)
  assert.equal(frameAt(200,400),0)
  assert.equal(frameAt(300,400),13)
  assert.equal(frameAt(400,400),16)
})
