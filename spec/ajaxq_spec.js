describe('AjaxQ', function () {

    afterEach(function() {
        $.ajaxq.clear();
    });

    describe('isRunning', function() {

        it('can determine if any queue has requests to process', function() {
            expect($.ajaxq.isRunning()).toBe(false);

            $.getq('a', {});
            expect($.ajaxq.isRunning()).toBe(true);
        });

        it('can determine if a specific queue has requests to process', function() {
            expect($.ajaxq.isRunning()).toBe(false);

            $.getq('a', {});
            $.postq('b', {});

            expect($.ajaxq.isRunning('a')).toBe(true);
            expect($.ajaxq.isRunning('b')).toBe(true);

            $.ajaxq.clear('a');

            expect($.ajaxq.isRunning('a')).toBe(false);
            expect($.ajaxq.isRunning('b')).toBe(true);
        });

    });

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