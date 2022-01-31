class Accessibility {
    static tabIndex(key) {
        if (Accessibility.currentTabIndex[key]) {
            return Accessibility.currentTabIndex[key];
        }
        Accessibility.currentTabIndex[key] = Object.keys(Accessibility.currentTabIndex).length
        return Object.keys(Accessibility.currentTabIndex).length
    }
}
Accessibility.currentTabIndex = {};
Accessibility.currentTabIndex["nil"] = 1;

export default Accessibility;