describe('AjaxQ', function () {

    describe('clear', function() {

        beforeEach(function() {
            $.getq('one', {});
            $.postq('one', {});
            $.postq('two', {});
        });

        it('can clear all queues', function() {
            expect($.ajaxq.isRunning()).toBe(true);

            $.ajaxq.clear();

            expect($.ajaxq.isRunning()).toBe(false);
        });

        it('can clear a particular queue', function() {
            expect($.ajaxq.isRunning('one')).toBe(true);
            expect($.ajaxq.isRunning('two')).toBe(true);

            $.ajaxq.clear('one');

            expect($.ajaxq.isRunning('one')).toBe(false);
            expect($.ajaxq.isRunning('two')).toBe(true);
        });

        it('handles requests to clear a non-existing queue', function() {
            expect($.ajaxq.isRunning('one')).toBe(true);
            expect($.ajaxq.isRunning('two')).toBe(true);

            $.ajaxq.clear('three');

            expect($.ajaxq.isRunning('one')).toBe(true);
            expect($.ajaxq.isRunning('two')).toBe(true);
        });

    });
});