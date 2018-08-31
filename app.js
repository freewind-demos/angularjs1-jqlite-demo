const app = angular.module('app', [])
app.controller('borderedController', function ($scope, $element) {
    $scope.borderAll = function () {
        const children = $element.children()
        for (let i = 0; i < children.length; i++) {
            const child = children[i]
            const $child = angular.element(child)
            $child.css('border', '1px solid red')
        }
    }
})