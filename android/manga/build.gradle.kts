import java.util.Properties

plugins { id("com.android.application"); id("org.jetbrains.kotlin.android") }

val code = (project.findProperty("extVersionCode") as String?)?.toInt() ?: 1
val keyProps = Properties().apply { rootProject.file("keystore.properties").takeIf { it.exists() }?.inputStream()?.use { load(it) } }

android {
    namespace = "eu.kanade.tachiyomi.extension.all.kiritokmn"
    compileSdk = (project.findProperty("compileSdkOverride") as String?)?.toInt() ?: 35
    (project.findProperty("buildToolsOverride") as String?)?.let { buildToolsVersion = it }
    defaultConfig {
        applicationId = "eu.kanade.tachiyomi.extension.all.kiritokmn"
        minSdk = 21
        targetSdk = 34
        versionCode = code
        versionName = "1.4.${code}"
    }
    flavorDimensions += "content"
    productFlavors {
        create("sfw") { dimension = "content"; manifestPlaceholders += mapOf("appName" to "Tachiyomi: Kiritokmn Truyện", "nsfw" to "0") }
        create("nsfw") { dimension = "content"; applicationIdSuffix = ".nsfw"; manifestPlaceholders += mapOf("appName" to "Tachiyomi: Kiritokmn Truyện 18+", "nsfw" to "1") }
    }
    sourceSets["main"].java.srcDirs("src/main/kotlin", "../shared/kotlin")
    sourceSets["main"].assets.srcDirs("src/main/assets", "../shared/assets")
    signingConfigs {
        create("release") {
            if (keyProps.isNotEmpty()) {
                storeFile = rootProject.file(keyProps.getProperty("storeFile"))
                storePassword = keyProps.getProperty("storePassword")
                keyAlias = keyProps.getProperty("keyAlias")
                keyPassword = keyProps.getProperty("keyPassword")
            }
        }
    }
    buildTypes {
        release {
            isMinifyEnabled = false
            isShrinkResources = false
            proguardFiles("../proguard-rules.pro")
            signingConfig = signingConfigs.getByName("release")
        }
    }
    compileOptions { sourceCompatibility = JavaVersion.VERSION_1_8; targetCompatibility = JavaVersion.VERSION_1_8 }
    
    dependenciesInfo { includeInApk = false; includeInBundle = false }
    packaging { resources.excludes += setOf("META-INF/**", "**.properties", "kotlin/**") }
}

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
