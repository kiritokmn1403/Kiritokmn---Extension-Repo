pluginManagement {
    repositories { google(); mavenCentral(); gradlePluginPortal() }
}
dependencyResolutionManagement {
    repositories { google(); mavenCentral(); maven("https://jitpack.io") }
}
rootProject.name = "kiritokmn-extensions"
include(":stub-anime", ":stub-manga", ":anime-core", ":manga-core", ":anime", ":manga")
