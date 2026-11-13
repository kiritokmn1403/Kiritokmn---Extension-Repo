// Shared code of every manga extension APK: compiled ONCE here, then packaged into each per-source APK of :manga.
// The Kotlin sources stay where they always were (../manga/src/main/kotlin, ../shared/kotlin).
plugins { id("com.android.library"); id("org.jetbrains.kotlin.android") }

android {
    namespace = "kiritokmn.vbook.manga.core"
    compileSdk = (project.findProperty("compileSdkOverride") as String?)?.toInt() ?: 35
    (project.findProperty("buildToolsOverride") as String?)?.let { buildToolsVersion = it }
    defaultConfig { minSdk = 21 }
    sourceSets["main"].java.srcDirs("../manga/src/main/kotlin", "../shared/kotlin")
    sourceSets["main"].assets.srcDirs("../shared/assets")
    compileOptions { sourceCompatibility = JavaVersion.VERSION_1_8; targetCompatibility = JavaVersion.VERSION_1_8 }
    lint { checkReleaseBuilds = false; abortOnError = false }
}

androidComponents { beforeVariants(selector().withBuildType("debug")) { it.enable = false } }

dependencies {
    compileOnly(project(":stub-manga"))
    implementation("org.mozilla:rhino:1.7.15")
    compileOnly("com.squareup.okhttp3:okhttp:4.12.0")
    compileOnly("org.jsoup:jsoup:1.21.2")
    compileOnly("io.reactivex:rxjava:1.3.8")
    compileOnly("androidx.preference:preference-ktx:1.2.1")
    compileOnly("org.jetbrains.kotlin:kotlin-stdlib:2.2.20")
}

kotlin { compilerOptions { jvmTarget.set(org.jetbrains.kotlin.gradle.dsl.JvmTarget.JVM_1_8) } }
