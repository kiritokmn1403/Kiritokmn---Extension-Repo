# Keep the factories/sources the host app instantiates by reflection
-keep class kiritokmn.vbook.** { *; }
# Rhino uses reflection for the Java bridge (__host methods)
-keep class org.mozilla.javascript.** { *; }
-dontwarn org.mozilla.javascript.**
-dontwarn javax.lang.model.**
-dontwarn java.beans.**
-dontwarn jdk.dynalink.**
# Host app classes are provided at runtime
-dontwarn eu.kanade.tachiyomi.**
-dontwarn okhttp3.**
-dontwarn org.jsoup.**
-dontwarn rx.**
-dontwarn uy.kohesive.**
-dontwarn androidx.**
-dontwarn kotlin.**
-dontobfuscate
