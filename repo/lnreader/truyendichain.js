var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var e_1, _a;
var c0 = Object.create;
var Ze = Object.defineProperty, o0 = Object.defineProperties, f0 = Object.getOwnPropertyDescriptor, l0 = Object.getOwnPropertyDescriptors, d0 = Object.getOwnPropertyNames, Qu = Object.getOwnPropertySymbols, h0 = Object.getPrototypeOf, Zu = Object.prototype.hasOwnProperty, b0 = Object.prototype.propertyIsEnumerable;
var Xu = function (t, e, u) { return e in t ? Ze(t, e, { enumerable: !0, configurable: !0, writable: !0, value: u }) : t[e] = u; }, oe = function (t, e) {
    var e_2, _a;
    for (var u in e || (e = {}))
        Zu.call(e, u) && Xu(t, u, e[u]);
    if (Qu)
        try {
            for (var _b = __values(Qu(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var u = _c.value;
                b0.call(e, u) && Xu(t, u, e[u]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return t;
}, ke = function (t, e) { return o0(t, l0(e)); };
var p0 = function (t, e) { return function () { return (e || t((e = { exports: {} }).exports, e), e.exports); }; }, Kt = function (t, e) { for (var u in e)
    Ze(t, u, { get: e[u], enumerable: !0 }); }, Yu = function (t, e, u, r) {
    var e_3, _a;
    if (e && typeof e == "object" || typeof e == "function") {
        var _loop_1 = function (a) {
            !Zu.call(t, a) && a !== u && Ze(t, a, { get: function () { return e[a]; }, enumerable: !(r = f0(e, a)) || r.enumerable });
        };
        try {
            for (var _b = __values(d0(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                _loop_1(a);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return t;
};
var Ne = function (t, e, u) { return (u = t != null ? c0(h0(t)) : {}, Yu(e || !t || !t.__esModule ? Ze(u, "default", { value: t, enumerable: !0 }) : u, t)); }, g0 = function (t) { return Yu(Ze({}, "__esModule", { value: !0 }), t); };
var Te = p0(function (mn, Nr) { Nr.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var Va = {};
Kt(Va, { default: function () { return Fa; } });
module.exports = g0(Va);
var pt = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (t) { return t.charCodeAt(0); }));
var gt = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (t) { return t.charCodeAt(0); }));
var Jt, m0 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Me = (Jt = String.fromCodePoint) !== null && Jt !== void 0 ? Jt : function (t) { var e = ""; return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e; };
function Qt(t) { var e; return t >= 55296 && t <= 57343 || t > 1114111 ? 65533 : (e = m0.get(t)) !== null && e !== void 0 ? e : t; }
var Q;
(function (t) { t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z"; })(Q || (Q = {}));
var x0 = 32, we;
(function (t) { t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE"; })(we || (we = {}));
function Xt(t) { return t >= Q.ZERO && t <= Q.NINE; }
function y0(t) { return t >= Q.UPPER_A && t <= Q.UPPER_F || t >= Q.LOWER_A && t <= Q.LOWER_F; }
function v0(t) { return t >= Q.UPPER_A && t <= Q.UPPER_Z || t >= Q.LOWER_A && t <= Q.LOWER_Z || Xt(t); }
function w0(t) { return t === Q.EQUALS || v0(t); }
var J;
(function (t) { t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity"; })(J || (J = {}));
var ae;
(function (t) { t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute"; })(ae || (ae = {}));
var Pe = (function () {
    function Pe(e, u, r) {
        this.decodeTree = e, this.emitCodePoint = u, this.errors = r, this.state = J.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ae.Strict;
    }
    Pe.prototype.startEntity = function (e) { this.decodeMode = e, this.state = J.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Pe.prototype.write = function (e, u) { switch (this.state) {
        case J.EntityStart: return e.charCodeAt(u) === Q.NUM ? (this.state = J.NumericStart, this.consumed += 1, this.stateNumericStart(e, u + 1)) : (this.state = J.NamedEntity, this.stateNamedEntity(e, u));
        case J.NumericStart: return this.stateNumericStart(e, u);
        case J.NumericDecimal: return this.stateNumericDecimal(e, u);
        case J.NumericHex: return this.stateNumericHex(e, u);
        case J.NamedEntity: return this.stateNamedEntity(e, u);
    } };
    Pe.prototype.stateNumericStart = function (e, u) { return u >= e.length ? -1 : (e.charCodeAt(u) | x0) === Q.LOWER_X ? (this.state = J.NumericHex, this.consumed += 1, this.stateNumericHex(e, u + 1)) : (this.state = J.NumericDecimal, this.stateNumericDecimal(e, u)); };
    Pe.prototype.addToNumericResult = function (e, u, r, a) { if (u !== r) {
        var n = r - u;
        this.result = this.result * Math.pow(a, n) + parseInt(e.substr(u, n), a), this.consumed += n;
    } };
    Pe.prototype.stateNumericHex = function (e, u) { var r = u; for (; u < e.length;) {
        var a = e.charCodeAt(u);
        if (Xt(a) || y0(a))
            u += 1;
        else
            return this.addToNumericResult(e, r, u, 16), this.emitNumericEntity(a, 3);
    } return this.addToNumericResult(e, r, u, 16), -1; };
    Pe.prototype.stateNumericDecimal = function (e, u) { var r = u; for (; u < e.length;) {
        var a = e.charCodeAt(u);
        if (Xt(a))
            u += 1;
        else
            return this.addToNumericResult(e, r, u, 10), this.emitNumericEntity(a, 2);
    } return this.addToNumericResult(e, r, u, 10), -1; };
    Pe.prototype.emitNumericEntity = function (e, u) { var r; if (this.consumed <= u)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === Q.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === ae.Strict)
        return 0; return this.emitCodePoint(Qt(this.result), this.consumed), this.errors && (e !== Q.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Pe.prototype.stateNamedEntity = function (e, u) { var r = this.decodeTree, a = r[this.treeIndex], n = (a & we.VALUE_LENGTH) >> 14; for (; u < e.length; u++, this.excess++) {
        var s = e.charCodeAt(u);
        if (this.treeIndex = S0(r, a, this.treeIndex + Math.max(1, n), s), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === ae.Attribute && (n === 0 || w0(s)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (a = r[this.treeIndex], n = (a & we.VALUE_LENGTH) >> 14, n !== 0) {
            if (s === Q.SEMI)
                return this.emitNamedEntityData(this.treeIndex, n, this.consumed + this.excess);
            this.decodeMode !== ae.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Pe.prototype.emitNotTerminatedNamedEntity = function () { var e; var _a = this, u = _a.result, r = _a.decodeTree, a = (r[u] & we.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, a, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; };
    Pe.prototype.emitNamedEntityData = function (e, u, r) { var a = this.decodeTree; return this.emitCodePoint(u === 1 ? a[e] & ~we.VALUE_LENGTH : a[e + 1], r), u === 3 && this.emitCodePoint(a[e + 2], r), r; };
    Pe.prototype.end = function () { var e; switch (this.state) {
        case J.NamedEntity: return this.result !== 0 && (this.decodeMode !== ae.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case J.NumericDecimal: return this.emitNumericEntity(0, 2);
        case J.NumericHex: return this.emitNumericEntity(0, 3);
        case J.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case J.EntityStart: return 0;
    } };
    return Pe;
}());
function _u(t) { var e = "", u = new Pe(t, function (r) { return e += Me(r); }); return function (a, n) { var s = 0, o = 0; for (; (o = a.indexOf("&", o)) >= 0;) {
    e += a.slice(s, o), u.startEntity(n);
    var d = u.write(a, o + 1);
    if (d < 0) {
        s = o + u.end();
        break;
    }
    s = o + d, o = d === 0 ? s + 1 : s;
} var f = e + a.slice(s); return e = "", f; }; }
function S0(t, e, u, r) { var a = (e & we.BRANCH_LENGTH) >> 7, n = e & we.JUMP_TABLE; if (a === 0)
    return n !== 0 && r === n ? u : -1; if (n) {
    var f = r - n;
    return f < 0 || f >= a ? -1 : t[u + f] - 1;
} var s = u, o = s + a - 1; for (; s <= o;) {
    var f = s + o >>> 1, d = t[f];
    if (d < r)
        s = f + 1;
    else if (d > r)
        o = f - 1;
    else
        return t[f + a];
} return -1; }
var Xa = _u(pt), Za = _u(gt);
var E;
(function (t) { t[t.Tab = 9] = "Tab", t[t.NewLine = 10] = "NewLine", t[t.FormFeed = 12] = "FormFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t[t.Space = 32] = "Space", t[t.ExclamationMark = 33] = "ExclamationMark", t[t.Number = 35] = "Number", t[t.Amp = 38] = "Amp", t[t.SingleQuote = 39] = "SingleQuote", t[t.DoubleQuote = 34] = "DoubleQuote", t[t.Dash = 45] = "Dash", t[t.Slash = 47] = "Slash", t[t.Zero = 48] = "Zero", t[t.Nine = 57] = "Nine", t[t.Semi = 59] = "Semi", t[t.Lt = 60] = "Lt", t[t.Eq = 61] = "Eq", t[t.Gt = 62] = "Gt", t[t.Questionmark = 63] = "Questionmark", t[t.UpperA = 65] = "UpperA", t[t.LowerA = 97] = "LowerA", t[t.UpperF = 70] = "UpperF", t[t.LowerF = 102] = "LowerF", t[t.UpperZ = 90] = "UpperZ", t[t.LowerZ = 122] = "LowerZ", t[t.LowerX = 120] = "LowerX", t[t.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(E || (E = {}));
var b;
(function (t) { t[t.Text = 1] = "Text", t[t.BeforeTagName = 2] = "BeforeTagName", t[t.InTagName = 3] = "InTagName", t[t.InSelfClosingTag = 4] = "InSelfClosingTag", t[t.BeforeClosingTagName = 5] = "BeforeClosingTagName", t[t.InClosingTagName = 6] = "InClosingTagName", t[t.AfterClosingTagName = 7] = "AfterClosingTagName", t[t.BeforeAttributeName = 8] = "BeforeAttributeName", t[t.InAttributeName = 9] = "InAttributeName", t[t.AfterAttributeName = 10] = "AfterAttributeName", t[t.BeforeAttributeValue = 11] = "BeforeAttributeValue", t[t.InAttributeValueDq = 12] = "InAttributeValueDq", t[t.InAttributeValueSq = 13] = "InAttributeValueSq", t[t.InAttributeValueNq = 14] = "InAttributeValueNq", t[t.BeforeDeclaration = 15] = "BeforeDeclaration", t[t.InDeclaration = 16] = "InDeclaration", t[t.InProcessingInstruction = 17] = "InProcessingInstruction", t[t.BeforeComment = 18] = "BeforeComment", t[t.CDATASequence = 19] = "CDATASequence", t[t.InSpecialComment = 20] = "InSpecialComment", t[t.InCommentLike = 21] = "InCommentLike", t[t.BeforeSpecialS = 22] = "BeforeSpecialS", t[t.BeforeSpecialT = 23] = "BeforeSpecialT", t[t.SpecialStartSequence = 24] = "SpecialStartSequence", t[t.InSpecialTag = 25] = "InSpecialTag", t[t.InEntity = 26] = "InEntity"; })(b || (b = {}));
function pe(t) { return t === E.Space || t === E.NewLine || t === E.Tab || t === E.FormFeed || t === E.CarriageReturn; }
function mt(t) { return t === E.Slash || t === E.Gt || pe(t); }
function A0(t) { return t >= E.LowerA && t <= E.LowerZ || t >= E.UpperA && t <= E.UpperZ; }
var ie;
(function (t) { t[t.NoValue = 0] = "NoValue", t[t.Unquoted = 1] = "Unquoted", t[t.Single = 2] = "Single", t[t.Double = 3] = "Double"; })(ie || (ie = {}));
var X = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Be = (function () {
    function Be(_a, r) {
        var _b = _a.xmlMode, e = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, u = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = b.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = b.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = u, this.entityDecoder = new Pe(e ? gt : pt, function (a, n) { return _this.emitCodePoint(a, n); });
    }
    Be.prototype.reset = function () { this.state = b.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = b.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Be.prototype.write = function (e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); };
    Be.prototype.end = function () { this.running && this.finish(); };
    Be.prototype.pause = function () { this.running = !1; };
    Be.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Be.prototype.stateText = function (e) { e === E.Lt || !this.decodeEntities && this.fastForwardTo(E.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = b.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === E.Amp && this.startEntity(); };
    Be.prototype.stateSpecialStartSequence = function (e) { var u = this.sequenceIndex === this.currentSequence.length; if (!(u ? mt(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = b.InTagName, this.stateInTagName(e); };
    Be.prototype.stateInSpecialTag = function (e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === E.Gt || pe(e)) {
            var u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                var r = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === X.TitleEnd ? this.decodeEntities && e === E.Amp && this.startEntity() : this.fastForwardTo(E.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === E.Lt); };
    Be.prototype.stateCDATASequence = function (e) { e === X.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === X.Cdata.length && (this.state = b.InCommentLike, this.currentSequence = X.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = b.InDeclaration, this.stateInDeclaration(e)); };
    Be.prototype.fastForwardTo = function (e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Be.prototype.stateInCommentLike = function (e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === X.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = b.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Be.prototype.isTagStartChar = function (e) { return this.xmlMode ? !mt(e) : A0(e); };
    Be.prototype.startSpecial = function (e, u) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = u, this.state = b.SpecialStartSequence; };
    Be.prototype.stateBeforeTagName = function (e) { if (e === E.ExclamationMark)
        this.state = b.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === E.Questionmark)
        this.state = b.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        var u = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = b.InTagName : u === X.ScriptEnd[2] ? this.state = b.BeforeSpecialS : u === X.TitleEnd[2] ? this.state = b.BeforeSpecialT : this.state = b.InTagName;
    }
    else
        e === E.Slash ? this.state = b.BeforeClosingTagName : (this.state = b.Text, this.stateText(e)); };
    Be.prototype.stateInTagName = function (e) { mt(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Be.prototype.stateBeforeClosingTagName = function (e) { pe(e) || (e === E.Gt ? this.state = b.Text : (this.state = this.isTagStartChar(e) ? b.InClosingTagName : b.InSpecialComment, this.sectionStart = this.index)); };
    Be.prototype.stateInClosingTagName = function (e) { (e === E.Gt || pe(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = b.AfterClosingTagName, this.stateAfterClosingTagName(e)); };
    Be.prototype.stateAfterClosingTagName = function (e) { (e === E.Gt || this.fastForwardTo(E.Gt)) && (this.state = b.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateBeforeAttributeName = function (e) { e === E.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = b.InSpecialTag, this.sequenceIndex = 0) : this.state = b.Text, this.sectionStart = this.index + 1) : e === E.Slash ? this.state = b.InSelfClosingTag : pe(e) || (this.state = b.InAttributeName, this.sectionStart = this.index); };
    Be.prototype.stateInSelfClosingTag = function (e) { e === E.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = b.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : pe(e) || (this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Be.prototype.stateInAttributeName = function (e) { (e === E.Eq || mt(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = b.AfterAttributeName, this.stateAfterAttributeName(e)); };
    Be.prototype.stateAfterAttributeName = function (e) { e === E.Eq ? this.state = b.BeforeAttributeValue : e === E.Slash || e === E.Gt ? (this.cbs.onattribend(ie.NoValue, this.sectionStart), this.sectionStart = -1, this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(e)) : pe(e) || (this.cbs.onattribend(ie.NoValue, this.sectionStart), this.state = b.InAttributeName, this.sectionStart = this.index); };
    Be.prototype.stateBeforeAttributeValue = function (e) { e === E.DoubleQuote ? (this.state = b.InAttributeValueDq, this.sectionStart = this.index + 1) : e === E.SingleQuote ? (this.state = b.InAttributeValueSq, this.sectionStart = this.index + 1) : pe(e) || (this.sectionStart = this.index, this.state = b.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); };
    Be.prototype.handleInAttributeValue = function (e, u) { e === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === E.DoubleQuote ? ie.Double : ie.Single, this.index + 1), this.state = b.BeforeAttributeName) : this.decodeEntities && e === E.Amp && this.startEntity(); };
    Be.prototype.stateInAttributeValueDoubleQuotes = function (e) { this.handleInAttributeValue(e, E.DoubleQuote); };
    Be.prototype.stateInAttributeValueSingleQuotes = function (e) { this.handleInAttributeValue(e, E.SingleQuote); };
    Be.prototype.stateInAttributeValueNoQuotes = function (e) { pe(e) || e === E.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(ie.Unquoted, this.index), this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === E.Amp && this.startEntity(); };
    Be.prototype.stateBeforeDeclaration = function (e) { e === E.OpeningSquareBracket ? (this.state = b.CDATASequence, this.sequenceIndex = 0) : this.state = e === E.Dash ? b.BeforeComment : b.InDeclaration; };
    Be.prototype.stateInDeclaration = function (e) { (e === E.Gt || this.fastForwardTo(E.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = b.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateInProcessingInstruction = function (e) { (e === E.Gt || this.fastForwardTo(E.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = b.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateBeforeComment = function (e) { e === E.Dash ? (this.state = b.InCommentLike, this.currentSequence = X.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = b.InDeclaration; };
    Be.prototype.stateInSpecialComment = function (e) { (e === E.Gt || this.fastForwardTo(E.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = b.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateBeforeSpecialS = function (e) { var u = e | 32; u === X.ScriptEnd[3] ? this.startSpecial(X.ScriptEnd, 4) : u === X.StyleEnd[3] ? this.startSpecial(X.StyleEnd, 4) : (this.state = b.InTagName, this.stateInTagName(e)); };
    Be.prototype.stateBeforeSpecialT = function (e) { var u = e | 32; u === X.TitleEnd[3] ? this.startSpecial(X.TitleEnd, 4) : u === X.TextareaEnd[3] ? this.startSpecial(X.TextareaEnd, 4) : (this.state = b.InTagName, this.stateInTagName(e)); };
    Be.prototype.startEntity = function () { this.baseState = this.state, this.state = b.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? ae.Strict : this.baseState === b.Text || this.baseState === b.InSpecialTag ? ae.Legacy : ae.Attribute); };
    Be.prototype.stateInEntity = function () { var e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Be.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === b.Text || this.state === b.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === b.InAttributeValueDq || this.state === b.InAttributeValueSq || this.state === b.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Be.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Be.prototype.parse = function () { for (; this.shouldContinue();) {
        var e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case b.Text: {
                this.stateText(e);
                break;
            }
            case b.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case b.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case b.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case b.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case b.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case b.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case b.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case b.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case b.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case b.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case b.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case b.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case b.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case b.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case b.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case b.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case b.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case b.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case b.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case b.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case b.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case b.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case b.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case b.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
            }
            case b.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Be.prototype.finish = function () { this.state === b.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Be.prototype.handleTrailingData = function () { var e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === b.InCommentLike ? this.currentSequence === X.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === b.InTagName || this.state === b.BeforeAttributeName || this.state === b.BeforeAttributeValue || this.state === b.AfterAttributeName || this.state === b.InAttributeName || this.state === b.InAttributeValueSq || this.state === b.InAttributeValueDq || this.state === b.InAttributeValueNq || this.state === b.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); };
    Be.prototype.emitCodePoint = function (e, u) { this.baseState !== b.Text && this.baseState !== b.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); };
    return Be;
}());
var Re = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), F = new Set(["p"]), er = new Set(["thead", "tbody"]), tr = new Set(["dd", "dt"]), ur = new Set(["rt", "rp"]), E0 = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", F], ["h1", F], ["h2", F], ["h3", F], ["h4", F], ["h5", F], ["h6", F], ["select", Re], ["input", Re], ["output", Re], ["button", Re], ["datalist", Re], ["textarea", Re], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", tr], ["dt", tr], ["address", F], ["article", F], ["aside", F], ["blockquote", F], ["details", F], ["div", F], ["dl", F], ["fieldset", F], ["figcaption", F], ["figure", F], ["footer", F], ["form", F], ["header", F], ["hr", F], ["main", F], ["nav", F], ["ol", F], ["pre", F], ["section", F], ["table", F], ["ul", F], ["rt", ur], ["rp", ur], ["tbody", er], ["tfoot", er]]), T0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), rr = new Set(["math", "svg"]), ar = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), k0 = /\s|\//, Ye = (function () {
    function Ye(e, u) {
        if (u === void 0) { u = {}; }
        var r, a, n, s, o, f;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e != null ? e : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = u.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (a = u.lowerCaseAttributeNames) !== null && a !== void 0 ? a : this.htmlMode, this.recognizeSelfClosing = (n = u.recognizeSelfClosing) !== null && n !== void 0 ? n : !this.htmlMode, this.tokenizer = new ((s = u.Tokenizer) !== null && s !== void 0 ? s : Be)(this.options, this), this.foreignContext = [!this.htmlMode], (f = (o = this.cbs).onparserinit) === null || f === void 0 || f.call(o, this);
    }
    Ye.prototype.ontext = function (e, u) { var r, a; var n = this.getSlice(e, u); this.endIndex = u - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, n), this.startIndex = u; };
    Ye.prototype.ontextentity = function (e, u) { var r, a; this.endIndex = u - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, Me(e)), this.startIndex = u; };
    Ye.prototype.isVoidElement = function (e) { return this.htmlMode && T0.has(e); };
    Ye.prototype.onopentagname = function (e, u) { this.endIndex = u; var r = this.getSlice(e, u); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    Ye.prototype.emitOpenTag = function (e) { var u, r, a, n; this.openTagStart = this.startIndex, this.tagname = e; var s = this.htmlMode && E0.get(e); if (s)
        for (; this.stack.length > 0 && s.has(this.stack[0]);) {
            var o = this.stack.shift();
            (r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, o, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (rr.has(e) ? this.foreignContext.unshift(!0) : ar.has(e) && this.foreignContext.unshift(!1))), (n = (a = this.cbs).onopentagname) === null || n === void 0 || n.call(a, e), this.cbs.onopentag && (this.attribs = {}); };
    Ye.prototype.endOpenTag = function (e) { var u, r; this.startIndex = this.openTagStart, this.attribs && ((r = (u = this.cbs).onopentag) === null || r === void 0 || r.call(u, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Ye.prototype.onopentagend = function (e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; };
    Ye.prototype.onclosetag = function (e, u) { var r, a, n, s, o, f, d, g; this.endIndex = u; var k = this.getSlice(e, u); if (this.lowerCaseTagNames && (k = k.toLowerCase()), this.htmlMode && (rr.has(k) || ar.has(k)) && this.foreignContext.shift(), this.isVoidElement(k))
        this.htmlMode && k === "br" && ((s = (n = this.cbs).onopentagname) === null || s === void 0 || s.call(n, "br"), (f = (o = this.cbs).onopentag) === null || f === void 0 || f.call(o, "br", {}, !0), (g = (d = this.cbs).onclosetag) === null || g === void 0 || g.call(d, "br", !1));
    else {
        var y = this.stack.indexOf(k);
        if (y !== -1)
            for (var w = 0; w <= y; w++) {
                var N = this.stack.shift();
                (a = (r = this.cbs).onclosetag) === null || a === void 0 || a.call(r, N, w !== y);
            }
        else
            this.htmlMode && k === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; };
    Ye.prototype.onselfclosingtag = function (e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); };
    Ye.prototype.closeCurrentTag = function (e) { var u, r; var a = this.tagname; this.endOpenTag(e), this.stack[0] === a && ((r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, a, !e), this.stack.shift()); };
    Ye.prototype.onattribname = function (e, u) { this.startIndex = e; var r = this.getSlice(e, u); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    Ye.prototype.onattribdata = function (e, u) { this.attribvalue += this.getSlice(e, u); };
    Ye.prototype.onattribentity = function (e) { this.attribvalue += Me(e); };
    Ye.prototype.onattribend = function (e, u) { var r, a; this.endIndex = u, (a = (r = this.cbs).onattribute) === null || a === void 0 || a.call(r, this.attribname, this.attribvalue, e === ie.Double ? '"' : e === ie.Single ? "'" : e === ie.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Ye.prototype.getInstructionName = function (e) { var u = e.search(k0), r = u < 0 ? e : e.substr(0, u); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    Ye.prototype.ondeclaration = function (e, u) { this.endIndex = u; var r = this.getSlice(e, u); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(a), "!".concat(r));
    } this.startIndex = u + 1; };
    Ye.prototype.onprocessinginstruction = function (e, u) { this.endIndex = u; var r = this.getSlice(e, u); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(a), "?".concat(r));
    } this.startIndex = u + 1; };
    Ye.prototype.oncomment = function (e, u, r) { var a, n, s, o; this.endIndex = u, (n = (a = this.cbs).oncomment) === null || n === void 0 || n.call(a, this.getSlice(e, u - r)), (o = (s = this.cbs).oncommentend) === null || o === void 0 || o.call(s), this.startIndex = u + 1; };
    Ye.prototype.oncdata = function (e, u, r) { var a, n, s, o, f, d, g, k, y, w; this.endIndex = u; var N = this.getSlice(e, u - r); !this.htmlMode || this.options.recognizeCDATA ? ((n = (a = this.cbs).oncdatastart) === null || n === void 0 || n.call(a), (o = (s = this.cbs).ontext) === null || o === void 0 || o.call(s, N), (d = (f = this.cbs).oncdataend) === null || d === void 0 || d.call(f)) : ((k = (g = this.cbs).oncomment) === null || k === void 0 || k.call(g, "[CDATA[".concat(N, "]]")), (w = (y = this.cbs).oncommentend) === null || w === void 0 || w.call(y)), this.startIndex = u + 1; };
    Ye.prototype.onend = function () { var e, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (u = (e = this.cbs).onend) === null || u === void 0 || u.call(e); };
    Ye.prototype.reset = function () { var e, u, r, a; (u = (e = this.cbs).onreset) === null || u === void 0 || u.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r = this.cbs).onparserinit) === null || a === void 0 || a.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Ye.prototype.parseComplete = function (e) { this.reset(), this.end(e); };
    Ye.prototype.getSlice = function (e, u) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(e - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, u - this.bufferOffset); return r; };
    Ye.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Ye.prototype.write = function (e) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); };
    Ye.prototype.end = function (e) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); };
    Ye.prototype.pause = function () { this.tokenizer.pause(); };
    Ye.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Ye.prototype.parseChunk = function (e) { this.write(e); };
    Ye.prototype.done = function (e) { this.end(e); };
    return Ye;
}());
var xt = {};
Kt(xt, { CDATA: function () { return iu; }, Comment: function () { return tu; }, Directive: function () { return eu; }, Doctype: function () { return nu; }, ElementType: function () { return P; }, Root: function () { return Yt; }, Script: function () { return uu; }, Style: function () { return ru; }, Tag: function () { return au; }, Text: function () { return _t; }, isTag: function () { return Zt; } });
var P;
(function (t) { t.Root = "root", t.Text = "text", t.Directive = "directive", t.Comment = "comment", t.Script = "script", t.Style = "style", t.Tag = "tag", t.CDATA = "cdata", t.Doctype = "doctype"; })(P || (P = {}));
function Zt(t) { return t.type === P.Tag || t.type === P.Script || t.type === P.Style; }
var Yt = P.Root, _t = P.Text, eu = P.Directive, tu = P.Comment, uu = P.Script, ru = P.Style, au = P.Tag, iu = P.CDATA, nu = P.Doctype;
var yt = (function () {
    function yt() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(yt.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (e) { this.parent = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(yt.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (e) { this.prev = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(yt.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (e) { this.next = e; },
        enumerable: false,
        configurable: true
    });
    yt.prototype.cloneNode = function (e) {
        if (e === void 0) { e = !1; }
        return ir(this, e);
    };
    return yt;
}()), _e = (function (_super) {
    __extends(_e, _super);
    function _e(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = e;
        return _this;
    }
    Object.defineProperty(_e.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (e) { this.data = e; },
        enumerable: false,
        configurable: true
    });
    return _e;
}(yt)), He = (function (_super) {
    __extends(He, _super);
    function He() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = P.Text;
        return _this;
    }
    Object.defineProperty(He.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return He;
}(_e)), et = (function (_super) {
    __extends(et, _super);
    function et() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = P.Comment;
        return _this;
    }
    Object.defineProperty(et.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return et;
}(_e)), tt = (function (_super) {
    __extends(tt, _super);
    function tt(e, u) {
        var _this = this;
        _this = _super.call(this, u) || this, _this.name = e, _this.type = P.Directive;
        return _this;
    }
    Object.defineProperty(tt.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return tt;
}(_e)), ut = (function (_super) {
    __extends(ut, _super);
    function ut(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = e;
        return _this;
    }
    Object.defineProperty(ut.prototype, "firstChild", {
        get: function () { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ut.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ut.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (e) { this.children = e; },
        enumerable: false,
        configurable: true
    });
    return ut;
}(yt)), rt = (function (_super) {
    __extends(rt, _super);
    function rt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = P.CDATA;
        return _this;
    }
    Object.defineProperty(rt.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return rt;
}(ut)), Fe = (function (_super) {
    __extends(Fe, _super);
    function Fe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = P.Root;
        return _this;
    }
    Object.defineProperty(Fe.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Fe;
}(ut)), at = (function (_super) {
    __extends(at, _super);
    function at(e, u, r, a) {
        if (r === void 0) { r = []; }
        if (a === void 0) { a = e === "script" ? P.Script : e === "style" ? P.Style : P.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = e, _this.attribs = u, _this.type = a;
        return _this;
    }
    Object.defineProperty(at.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(at.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (e) { this.name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(at.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (e) { var u, r; return { name: e, value: _this.attribs[e], namespace: (u = _this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[e], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[e] }; });
        },
        enumerable: false,
        configurable: true
    });
    return at;
}(ut));
function H(t) { return Zt(t); }
function Ve(t) { return t.type === P.CDATA; }
function le(t) { return t.type === P.Text; }
function it(t) { return t.type === P.Comment; }
function N0(t) { return t.type === P.Directive; }
function cu(t) { return t.type === P.Root; }
function Z(t) { return Object.prototype.hasOwnProperty.call(t, "children"); }
function ir(t, e) {
    if (e === void 0) { e = !1; }
    var u;
    if (le(t))
        u = new He(t.data);
    else if (it(t))
        u = new et(t.data);
    else if (H(t)) {
        var r = e ? su(t.children) : [], a_1 = new at(t.name, oe({}, t.attribs), r);
        r.forEach(function (n) { return n.parent = a_1; }), t.namespace != null && (a_1.namespace = t.namespace), t["x-attribsNamespace"] && (a_1["x-attribsNamespace"] = oe({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (a_1["x-attribsPrefix"] = oe({}, t["x-attribsPrefix"])), u = a_1;
    }
    else if (Ve(t)) {
        var r = e ? su(t.children) : [], a_2 = new rt(r);
        r.forEach(function (n) { return n.parent = a_2; }), u = a_2;
    }
    else if (cu(t)) {
        var r = e ? su(t.children) : [], a_3 = new Fe(r);
        r.forEach(function (n) { return n.parent = a_3; }), t["x-mode"] && (a_3["x-mode"] = t["x-mode"]), u = a_3;
    }
    else if (N0(t)) {
        var r = new tt(t.name, t.data);
        t["x-name"] != null && (r["x-name"] = t["x-name"], r["x-publicId"] = t["x-publicId"], r["x-systemId"] = t["x-systemId"]), u = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(t.type));
    return u.startIndex = t.startIndex, u.endIndex = t.endIndex, t.sourceCodeLocation != null && (u.sourceCodeLocation = t.sourceCodeLocation), u;
}
function su(t) { var e = t.map(function (u) { return ir(u, !0); }); for (var u = 1; u < e.length; u++)
    e[u].prev = e[u - 1], e[u - 1].next = e[u]; return e; }
var nr = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Ge = (function () {
    function Ge(e, u, r) {
        this.dom = [], this.root = new Fe(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (r = u, u = nr), typeof e == "object" && (u = e, e = void 0), this.callback = e != null ? e : null, this.options = u != null ? u : nr, this.elementCB = r != null ? r : null;
    }
    Ge.prototype.onparserinit = function (e) { this.parser = e; };
    Ge.prototype.onreset = function () { this.dom = [], this.root = new Fe(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Ge.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Ge.prototype.onerror = function (e) { this.handleCallback(e); };
    Ge.prototype.onclosetag = function () { this.lastNode = null; var e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); };
    Ge.prototype.onopentag = function (e, u) { var r = this.options.xmlMode ? P.Tag : void 0, a = new at(e, u, void 0, r); this.addNode(a), this.tagStack.push(a); };
    Ge.prototype.ontext = function (e) { var u = this.lastNode; if (u && u.type === P.Text)
        u.data += e, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        var r = new He(e);
        this.addNode(r), this.lastNode = r;
    } };
    Ge.prototype.oncomment = function (e) { if (this.lastNode && this.lastNode.type === P.Comment) {
        this.lastNode.data += e;
        return;
    } var u = new et(e); this.addNode(u), this.lastNode = u; };
    Ge.prototype.oncommentend = function () { this.lastNode = null; };
    Ge.prototype.oncdatastart = function () { var e = new He(""), u = new rt([e]); this.addNode(u), e.parent = u, this.lastNode = e; };
    Ge.prototype.oncdataend = function () { this.lastNode = null; };
    Ge.prototype.onprocessinginstruction = function (e, u) { var r = new tt(e, u); this.addNode(r); };
    Ge.prototype.handleCallback = function (e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; };
    Ge.prototype.addNode = function (e) { var u = this.tagStack[this.tagStack.length - 1], r = u.children[u.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), u.children.push(e), r && (e.prev = r, r.next = e), e.parent = u, this.lastNode = null; };
    return Ge;
}());
var de = {};
Kt(de, { DocumentPosition: function () { return ne; }, append: function () { return K0; }, appendChild: function () { return W0; }, compareDocumentPosition: function () { return wr; }, existsOne: function () { return yr; }, filter: function () { return ze; }, find: function () { return kt; }, findAll: function () { return X0; }, findOne: function () { return Nt; }, findOneChild: function () { return Q0; }, getAttributeValue: function () { return G0; }, getChildren: function () { return Et; }, getElementById: function () { return ea; }, getElements: function () { return _0; }, getElementsByClassName: function () { return ta; }, getElementsByTagName: function () { return Ce; }, getElementsByTagType: function () { return ua; }, getFeed: function () { return vu; }, getInnerHTML: function () { return V0; }, getName: function () { return z0; }, getOuterHTML: function () { return mr; }, getParent: function () { return xr; }, getSiblings: function () { return Tt; }, getText: function () { return At; }, hasAttrib: function () { return j0; }, hasChildren: function () { return Z; }, innerText: function () { return bu; }, isCDATA: function () { return Ve; }, isComment: function () { return it; }, isDocument: function () { return cu; }, isTag: function () { return H; }, isText: function () { return le; }, nextElementSibling: function () { return pu; }, prepend: function () { return mu; }, prependChild: function () { return J0; }, prevElementSibling: function () { return gu; }, removeElement: function () { return ge; }, removeSubsets: function () { return ra; }, replaceElement: function () { return $0; }, testElement: function () { return Y0; }, textContent: function () { return Se; }, uniqueSort: function () { return yu; } });
function vt(t) { for (var e = 1; e < t.length; e++)
    t[e][0] += t[e - 1][0] + 1; return t; }
var C0 = new Map(vt([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(vt([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(vt([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(vt([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var ou = /["&'<>$\x80-\uFFFF]/g, sr = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), cr = String.prototype.codePointAt != null ? function (t, e) { return t.codePointAt(e); } : function (t, e) { return (t.charCodeAt(e) & 64512) === 55296 ? (t.charCodeAt(e) - 55296) * 1024 + t.charCodeAt(e + 1) - 56320 + 65536 : t.charCodeAt(e); };
function nt(t) { var e = "", u = 0, r; for (; (r = ou.exec(t)) !== null;) {
    var a = r.index, n = t.charCodeAt(a), s = sr.get(n);
    s !== void 0 ? (e += t.substring(u, a) + s, u = a + 1) : (e += "".concat(t.substring(u, a), "&#x").concat(cr(t, a).toString(16), ";"), u = ou.lastIndex += +((n & 64512) === 55296));
} return e + t.substr(u); }
function fu(t, e) { return function (r) { var a, n = 0, s = ""; for (; a = t.exec(r);)
    n !== a.index && (s += r.substring(n, a.index)), s += e.get(a[0].charCodeAt(0)), n = a.index + 1; return s + r.substring(n); }; }
var or = fu(/[&<>'"]/g, sr), wt = fu(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), St = fu(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var fr;
(function (t) { t[t.XML = 0] = "XML", t[t.HTML = 1] = "HTML"; })(fr || (fr = {}));
var lr;
(function (t) { t[t.UTF8 = 0] = "UTF8", t[t.ASCII = 1] = "ASCII", t[t.Extensive = 2] = "Extensive", t[t.Attribute = 3] = "Attribute", t[t.Text = 4] = "Text"; })(lr || (lr = {}));
var br = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (t) { return [t.toLowerCase(), t]; })), pr = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (t) { return [t.toLowerCase(), t]; }));
var I0 = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function D0(t) { return t.replace(/"/g, "&quot;"); }
function L0(t, e) { var u; if (!t)
    return; var r = ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) === !1 ? D0 : e.xmlMode || e.encodeEntities !== "utf8" ? nt : wt; return Object.keys(t).map(function (a) { var n, s; var o = (n = t[a]) !== null && n !== void 0 ? n : ""; return e.xmlMode === "foreign" && (a = (s = pr.get(a)) !== null && s !== void 0 ? s : a), !e.emptyAttrs && !e.xmlMode && o === "" ? a : "".concat(a, "=\"").concat(r(o), "\""); }).join(" "); }
var gr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function hu(t, e) {
    if (e === void 0) { e = {}; }
    var u = "length" in t ? t : [t], r = "";
    for (var a = 0; a < u.length; a++)
        r += O0(u[a], e);
    return r;
}
var je = hu;
function O0(t, e) { switch (t.type) {
    case Yt: return hu(t.children, e);
    case nu:
    case eu: return B0(t);
    case tu: return F0(t);
    case iu: return H0(t);
    case uu:
    case ru:
    case au: return P0(t, e);
    case _t: return R0(t, e);
} }
var U0 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), M0 = new Set(["svg", "math"]);
function P0(t, e) { var u; e.xmlMode === "foreign" && (t.name = (u = br.get(t.name)) !== null && u !== void 0 ? u : t.name, t.parent && U0.has(t.parent.name) && (e = ke(oe({}, e), { xmlMode: !1 }))), !e.xmlMode && M0.has(t.name) && (e = ke(oe({}, e), { xmlMode: "foreign" })); var r = "<".concat(t.name), a = L0(t.attribs, e); return a && (r += " ".concat(a)), t.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && gr.has(t.name)) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", t.children.length > 0 && (r += hu(t.children, e)), (e.xmlMode || !gr.has(t.name)) && (r += "</".concat(t.name, ">"))), r; }
function B0(t) { return "<".concat(t.data, ">"); }
function R0(t, e) { var u; var r = t.data || ""; return ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) !== !1 && !(!e.xmlMode && t.parent && I0.has(t.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? nt(r) : St(r)), r; }
function H0(t) { return "<![CDATA[".concat(t.children[0].data, "]]>"); }
function F0(t) { return "<!--".concat(t.data, "-->"); }
function mr(t, e) { return je(t, e); }
function V0(t, e) { return Z(t) ? t.children.map(function (u) { return mr(u, e); }).join("") : ""; }
function At(t) {
    return Array.isArray(t) ? t.map(At).join("") : H(t) ? t.name === "br" ? "\n" : At(t.children) : Ve(t) ? At(t.children) : le(t) ? t.data : "";
}
function Se(t) { return Array.isArray(t) ? t.map(Se).join("") : Z(t) && !it(t) ? Se(t.children) : le(t) ? t.data : ""; }
function bu(t) { return Array.isArray(t) ? t.map(bu).join("") : Z(t) && (t.type === P.Tag || Ve(t)) ? bu(t.children) : le(t) ? t.data : ""; }
function Et(t) { return Z(t) ? t.children : []; }
function xr(t) { return t.parent || null; }
function Tt(t) {
    var _a, _b;
    var e = xr(t);
    if (e != null)
        return Et(e);
    var u = [t], r = t.prev, a = t.next;
    for (; r != null;)
        u.unshift(r), _a = r, r = _a.prev;
    for (; a != null;)
        u.push(a), _b = a, a = _b.next;
    return u;
}
function G0(t, e) { var u; return (u = t.attribs) === null || u === void 0 ? void 0 : u[e]; }
function j0(t, e) { return t.attribs != null && Object.prototype.hasOwnProperty.call(t.attribs, e) && t.attribs[e] != null; }
function z0(t) { return t.name; }
function pu(t) {
    var _a;
    var e = t.next;
    for (; e !== null && !H(e);)
        (_a = e, e = _a.next);
    return e;
}
function gu(t) {
    var _a;
    var e = t.prev;
    for (; e !== null && !H(e);)
        (_a = e, e = _a.prev);
    return e;
}
function ge(t) { if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
    var e = t.parent.children, u = e.lastIndexOf(t);
    u >= 0 && e.splice(u, 1);
} t.next = null, t.prev = null, t.parent = null; }
function $0(t, e) { var u = e.prev = t.prev; u && (u.next = e); var r = e.next = t.next; r && (r.prev = e); var a = e.parent = t.parent; if (a) {
    var n = a.children;
    n[n.lastIndexOf(t)] = e, t.parent = null;
} }
function W0(t, e) { if (ge(e), e.next = null, e.parent = t, t.children.push(e) > 1) {
    var u = t.children[t.children.length - 2];
    u.next = e, e.prev = u;
}
else
    e.prev = null; }
function K0(t, e) { ge(e); var u = t.parent, r = t.next; if (e.next = r, e.prev = t, t.next = e, e.parent = u, r) {
    if (r.prev = e, u) {
        var a = u.children;
        a.splice(a.lastIndexOf(r), 0, e);
    }
}
else
    u && u.children.push(e); }
function J0(t, e) { if (ge(e), e.parent = t, e.prev = null, t.children.unshift(e) !== 1) {
    var u = t.children[1];
    u.prev = e, e.next = u;
}
else
    e.next = null; }
function mu(t, e) { ge(e); var u = t.parent; if (u) {
    var r = u.children;
    r.splice(r.indexOf(t), 0, e);
} t.prev && (t.prev.next = e), e.parent = u, e.prev = t.prev, e.next = t, t.prev = e; }
function ze(t, e, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return kt(t, Array.isArray(e) ? e : [e], u, r);
}
function kt(t, e, u, r) { var a = [], n = [Array.isArray(e) ? e : [e]], s = [0]; for (;;) {
    if (s[0] >= n[0].length) {
        if (s.length === 1)
            return a;
        n.shift(), s.shift();
        continue;
    }
    var o = n[0][s[0]++];
    if (t(o) && (a.push(o), --r <= 0))
        return a;
    u && Z(o) && o.children.length > 0 && (s.unshift(0), n.unshift(o.children));
} }
function Q0(t, e) { return e.find(t); }
function Nt(t, e, u) {
    if (u === void 0) { u = !0; }
    var r = Array.isArray(e) ? e : [e];
    for (var a = 0; a < r.length; a++) {
        var n = r[a];
        if (H(n) && t(n))
            return n;
        if (u && Z(n) && n.children.length > 0) {
            var s = Nt(t, n.children, !0);
            if (s)
                return s;
        }
    }
    return null;
}
function yr(t, e) { return (Array.isArray(e) ? e : [e]).some(function (u) { return H(u) && t(u) || Z(u) && yr(t, u.children); }); }
function X0(t, e) { var u = [], r = [Array.isArray(e) ? e : [e]], a = [0]; for (;;) {
    if (a[0] >= r[0].length) {
        if (r.length === 1)
            return u;
        r.shift(), a.shift();
        continue;
    }
    var n = r[0][a[0]++];
    H(n) && t(n) && u.push(n), Z(n) && n.children.length > 0 && (a.unshift(0), r.unshift(n.children));
} }
var Ct = { tag_name: function (t) { return typeof t == "function" ? function (e) { return H(e) && t(e.name); } : t === "*" ? H : function (e) { return H(e) && e.name === t; }; }, tag_type: function (t) { return typeof t == "function" ? function (e) { return t(e.type); } : function (e) { return e.type === t; }; }, tag_contains: function (t) { return typeof t == "function" ? function (e) { return le(e) && t(e.data); } : function (e) { return le(e) && e.data === t; }; } };
function xu(t, e) { return typeof e == "function" ? function (u) { return H(u) && e(u.attribs[t]); } : function (u) { return H(u) && u.attribs[t] === e; }; }
function Z0(t, e) { return function (u) { return t(u) || e(u); }; }
function vr(t) { var e = Object.keys(t).map(function (u) { var r = t[u]; return Object.prototype.hasOwnProperty.call(Ct, u) ? Ct[u](r) : xu(u, r); }); return e.length === 0 ? null : e.reduce(Z0); }
function Y0(t, e) { var u = vr(t); return u ? u(e) : !0; }
function _0(t, e, u, r) {
    if (r === void 0) { r = 1 / 0; }
    var a = vr(t);
    return a ? ze(a, e, u, r) : [];
}
function ea(t, e, u) {
    if (u === void 0) { u = !0; }
    return Array.isArray(e) || (e = [e]), Nt(xu("id", t), e, u);
}
function Ce(t, e, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return ze(Ct.tag_name(t), e, u, r);
}
function ta(t, e, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return ze(xu("class", t), e, u, r);
}
function ua(t, e, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return ze(Ct.tag_type(t), e, u, r);
}
function ra(t) { var e = t.length; for (; --e >= 0;) {
    var u = t[e];
    if (e > 0 && t.lastIndexOf(u, e - 1) >= 0) {
        t.splice(e, 1);
        continue;
    }
    for (var r = u.parent; r; r = r.parent)
        if (t.includes(r)) {
            t.splice(e, 1);
            break;
        }
} return t; }
var ne;
(function (t) { t[t.DISCONNECTED = 1] = "DISCONNECTED", t[t.PRECEDING = 2] = "PRECEDING", t[t.FOLLOWING = 4] = "FOLLOWING", t[t.CONTAINS = 8] = "CONTAINS", t[t.CONTAINED_BY = 16] = "CONTAINED_BY"; })(ne || (ne = {}));
function wr(t, e) { var u = [], r = []; if (t === e)
    return 0; var a = Z(t) ? t : t.parent; for (; a;)
    u.unshift(a), a = a.parent; for (a = Z(e) ? e : e.parent; a;)
    r.unshift(a), a = a.parent; var n = Math.min(u.length, r.length), s = 0; for (; s < n && u[s] === r[s];)
    s++; if (s === 0)
    return ne.DISCONNECTED; var o = u[s - 1], f = o.children, d = u[s], g = r[s]; return f.indexOf(d) > f.indexOf(g) ? o === e ? ne.FOLLOWING | ne.CONTAINED_BY : ne.FOLLOWING : o === t ? ne.PRECEDING | ne.CONTAINS : ne.PRECEDING; }
function yu(t) { return t = t.filter(function (e, u, r) { return !r.includes(e, u + 1); }), t.sort(function (e, u) { var r = wr(e, u); return r & ne.PRECEDING ? -1 : r & ne.FOLLOWING ? 1 : 0; }), t; }
function vu(t) { var e = qt(ca, t); return e ? e.name === "feed" ? aa(e) : ia(e) : null; }
function aa(t) { var e; var u = t.children, r = { type: "atom", items: Ce("entry", u).map(function (s) { var o; var f = s.children, d = { media: Sr(f) }; ee(d, "id", "id", f), ee(d, "title", "title", f); var g = (o = qt("link", f)) === null || o === void 0 ? void 0 : o.attribs.href; g && (d.link = g); var k = Ae("summary", f) || Ae("content", f); k && (d.description = k); var y = Ae("updated", f); return y && (d.pubDate = new Date(y)), d; }) }; ee(r, "id", "id", u), ee(r, "title", "title", u); var a = (e = qt("link", u)) === null || e === void 0 ? void 0 : e.attribs.href; a && (r.link = a), ee(r, "description", "subtitle", u); var n = Ae("updated", u); return n && (r.updated = new Date(n)), ee(r, "author", "email", u, !0), r; }
function ia(t) { var e, u; var r = (u = (e = qt("channel", t.children)) === null || e === void 0 ? void 0 : e.children) !== null && u !== void 0 ? u : [], a = { type: t.name.substr(0, 3), id: "", items: Ce("item", t.children).map(function (s) { var o = s.children, f = { media: Sr(o) }; ee(f, "id", "guid", o), ee(f, "title", "title", o), ee(f, "link", "link", o), ee(f, "description", "description", o); var d = Ae("pubDate", o) || Ae("dc:date", o); return d && (f.pubDate = new Date(d)), f; }) }; ee(a, "title", "title", r), ee(a, "link", "link", r), ee(a, "description", "description", r); var n = Ae("lastBuildDate", r); return n && (a.updated = new Date(n)), ee(a, "author", "managingEditor", r, !0), a; }
var na = ["url", "type", "lang"], sa = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function Sr(t) { return Ce("media:content", t).map(function (e) {
    var e_4, _a, e_5, _b;
    var u = e.attribs, r = { medium: u.medium, isDefault: !!u.isDefault };
    try {
        for (var na_1 = __values(na), na_1_1 = na_1.next(); !na_1_1.done; na_1_1 = na_1.next()) {
            var a = na_1_1.value;
            u[a] && (r[a] = u[a]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (na_1_1 && !na_1_1.done && (_a = na_1.return)) _a.call(na_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var sa_1 = __values(sa), sa_1_1 = sa_1.next(); !sa_1_1.done; sa_1_1 = sa_1.next()) {
            var a = sa_1_1.value;
            u[a] && (r[a] = parseInt(u[a], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (sa_1_1 && !sa_1_1.done && (_b = sa_1.return)) _b.call(sa_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return u.expression && (r.expression = u.expression), r;
}); }
function qt(t, e) { return Ce(t, e, !0, 1)[0]; }
function Ae(t, e, u) {
    if (u === void 0) { u = !1; }
    return Se(Ce(t, e, u, 1)).trim();
}
function ee(t, e, u, r, a) {
    if (a === void 0) { a = !1; }
    var n = Ae(u, r, a);
    n && (t[e] = n);
}
function ca(t) { return t === "rss" || t === "feed" || t === "rdf:RDF"; }
function Ar(t, e) { var u = new Ge(void 0, e); return new Ye(u, e).end(t), u.root; }
var S;
(function (t) { t.Attribute = "attribute", t.Pseudo = "pseudo", t.PseudoElement = "pseudo-element", t.Tag = "tag", t.Universal = "universal", t.Adjacent = "adjacent", t.Child = "child", t.Descendant = "descendant", t.Parent = "parent", t.Sibling = "sibling", t.ColumnCombinator = "column-combinator"; })(S || (S = {}));
var z;
(function (t) { t.Any = "any", t.Element = "element", t.End = "end", t.Equals = "equals", t.Exists = "exists", t.Hyphen = "hyphen", t.Not = "not", t.Start = "start"; })(z || (z = {}));
var Er = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, oa = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, fa = new Map([[126, z.Element], [94, z.Start], [36, z.End], [42, z.Any], [33, z.Not], [124, z.Hyphen]]), la = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function qe(t) { switch (t.type) {
    case S.Adjacent:
    case S.Child:
    case S.Descendant:
    case S.Parent:
    case S.Sibling:
    case S.ColumnCombinator: return !0;
    default: return !1;
} }
var da = new Set(["contains", "icontains"]);
function ha(t, e, u) { var r = parseInt(e, 16) - 65536; return r !== r || u ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function st(t) { return t.replace(oa, ha); }
function wu(t) { return t === 39 || t === 34; }
function Tr(t) { return t === 32 || t === 9 || t === 10 || t === 12 || t === 13; }
function Ee(t) { var e = [], u = kr(e, "".concat(t), 0); if (u < t.length)
    throw new Error("Unmatched selector: ".concat(t.slice(u))); return e; }
function kr(t, e, u) { var r = []; function a(y) { var w = e.slice(u + y).match(Er); if (!w)
    throw new Error("Expected name, found ".concat(e.slice(u))); var _a = __read(w, 1), N = _a[0]; return u += y + N.length, st(N); } function n(y) { for (u += y; u < e.length && Tr(e.charCodeAt(u));)
    u++; } function s() { u += 1; var y = u, w = 1; for (; w > 0 && u < e.length; u++)
    e.charCodeAt(u) === 40 && !o(u) ? w++ : e.charCodeAt(u) === 41 && !o(u) && w--; if (w)
    throw new Error("Parenthesis not matched"); return st(e.slice(y, u - 1)); } function o(y) { var w = 0; for (; e.charCodeAt(--y) === 92;)
    w++; return (w & 1) === 1; } function f() { if (r.length > 0 && qe(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function d(y) { if (r.length > 0 && r[r.length - 1].type === S.Descendant) {
    r[r.length - 1].type = y;
    return;
} f(), r.push({ type: y }); } function g(y, w) { r.push({ type: S.Attribute, name: y, action: w, value: a(1), namespace: null, ignoreCase: "quirks" }); } function k() { if (r.length && r[r.length - 1].type === S.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); t.push(r); } if (n(0), e.length === u)
    return u; e: for (; u < e.length;) {
    var y = e.charCodeAt(u);
    switch (y) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== S.Descendant) && (f(), r.push({ type: S.Descendant })), n(1);
            break;
        }
        case 62: {
            d(S.Child), n(1);
            break;
        }
        case 60: {
            d(S.Parent), n(1);
            break;
        }
        case 126: {
            d(S.Sibling), n(1);
            break;
        }
        case 43: {
            d(S.Adjacent), n(1);
            break;
        }
        case 46: {
            g("class", z.Element);
            break;
        }
        case 35: {
            g("id", z.Equals);
            break;
        }
        case 91: {
            n(1);
            var w = void 0, N = null;
            e.charCodeAt(u) === 124 ? w = a(1) : e.startsWith("*|", u) ? (N = "*", w = a(2)) : (w = a(0), e.charCodeAt(u) === 124 && e.charCodeAt(u + 1) !== 61 && (N = w, w = a(1))), n(0);
            var U = z.Exists, Y = fa.get(e.charCodeAt(u));
            if (Y) {
                if (U = Y, e.charCodeAt(u + 1) !== 61)
                    throw new Error("Expected `=`");
                n(2);
            }
            else
                e.charCodeAt(u) === 61 && (U = z.Equals, n(1));
            var _ = "", fe = null;
            if (U !== "exists") {
                if (wu(e.charCodeAt(u))) {
                    var D = e.charCodeAt(u), T = u + 1;
                    for (; T < e.length && (e.charCodeAt(T) !== D || o(T));)
                        T += 1;
                    if (e.charCodeAt(T) !== D)
                        throw new Error("Attribute value didn't end");
                    _ = st(e.slice(u + 1, T)), u = T + 1;
                }
                else {
                    var D = u;
                    for (; u < e.length && (!Tr(e.charCodeAt(u)) && e.charCodeAt(u) !== 93 || o(u));)
                        u += 1;
                    _ = st(e.slice(D, u));
                }
                n(0);
                var A = e.charCodeAt(u) | 32;
                A === 115 ? (fe = !1, n(1)) : A === 105 && (fe = !0, n(1));
            }
            if (e.charCodeAt(u) !== 93)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            var j = { type: S.Attribute, name: w, action: U, value: _, namespace: N, ignoreCase: fe };
            r.push(j);
            break;
        }
        case 58: {
            if (e.charCodeAt(u + 1) === 58) {
                r.push({ type: S.PseudoElement, name: a(2).toLowerCase(), data: e.charCodeAt(u) === 40 ? s() : null });
                continue;
            }
            var w = a(1).toLowerCase(), N = null;
            if (e.charCodeAt(u) === 40)
                if (la.has(w)) {
                    if (wu(e.charCodeAt(u + 1)))
                        throw new Error("Pseudo-selector ".concat(w, " cannot be quoted"));
                    if (N = [], u = kr(N, e, u + 1), e.charCodeAt(u) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(w, " (").concat(e, ")"));
                    u += 1;
                }
                else {
                    if (N = s(), da.has(w)) {
                        var U = N.charCodeAt(0);
                        U === N.charCodeAt(N.length - 1) && wu(U) && (N = N.slice(1, -1));
                    }
                    N = st(N);
                }
            r.push({ type: S.Pseudo, name: w, data: N });
            break;
        }
        case 44: {
            k(), r = [], n(1);
            break;
        }
        default: {
            if (e.startsWith("/*", u)) {
                var U = e.indexOf("*/", u + 2);
                if (U < 0)
                    throw new Error("Comment was not terminated");
                u = U + 2, r.length === 0 && n(0);
                break;
            }
            var w = null, N = void 0;
            if (y === 42)
                u += 1, N = "*";
            else if (y === 124) {
                if (N = "", e.charCodeAt(u + 1) === 124) {
                    d(S.ColumnCombinator), n(2);
                    break;
                }
            }
            else if (Er.test(e.slice(u)))
                N = a(0);
            else
                break e;
            e.charCodeAt(u) === 124 && e.charCodeAt(u + 1) !== 124 && (w = N, e.charCodeAt(u + 1) === 42 ? (N = "*", u += 2) : N = a(1)), r.push(N === "*" ? { type: S.Universal, namespace: w } : { type: S.Tag, name: N, namespace: w });
        }
    }
} return k(), u; }
var Lu = Ne(Te(), 1);
var me = Ne(Te(), 1);
var Cr = new Map([[S.Universal, 50], [S.Tag, 30], [S.Attribute, 1], [S.Pseudo, 0]]);
function ct(t) { return !Cr.has(t.type); }
var ba = new Map([[z.Exists, 10], [z.Equals, 8], [z.Not, 7], [z.Start, 6], [z.End, 6], [z.Any, 5]]);
function Su(t) { var e = t.map(qr); for (var u = 1; u < t.length; u++) {
    var r = e[u];
    if (!(r < 0))
        for (var a = u - 1; a >= 0 && r < e[a]; a--) {
            var n = t[a + 1];
            t[a + 1] = t[a], t[a] = n, e[a + 1] = e[a], e[a] = r;
        }
} }
function qr(t) { var e, u; var r = (e = Cr.get(t.type)) !== null && e !== void 0 ? e : -1; return t.type === S.Attribute ? (r = (u = ba.get(t.action)) !== null && u !== void 0 ? u : 4, t.action === z.Equals && t.name === "id" && (r = 9), t.ignoreCase && (r >>= 1)) : t.type === S.Pseudo && (t.data ? t.name === "has" || t.name === "contains" ? r = 0 : Array.isArray(t.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(t.data.map(function (a) { return Math.min.apply(Math, __spreadArray([], __read(a.map(qr)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var ot = Ne(Te(), 1), pa = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Ir(t) { return t.replace(pa, "\\$&"); }
var ga = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function Ie(t, e) { return typeof t.ignoreCase == "boolean" ? t.ignoreCase : t.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && ga.has(t.name); }
var Dr = { equals: function (t, e, u) { var r = u.adapter, a = e.name, n = e.value; return Ie(e, u) ? (n = n.toLowerCase(), function (s) { var o = r.getAttributeValue(s, a); return o != null && o.length === n.length && o.toLowerCase() === n && t(s); }) : function (s) { return r.getAttributeValue(s, a) === n && t(s); }; }, hyphen: function (t, e, u) { var r = u.adapter, a = e.name, n = e.value, s = n.length; return Ie(e, u) ? (n = n.toLowerCase(), function (f) { var d = r.getAttributeValue(f, a); return d != null && (d.length === s || d.charAt(s) === "-") && d.substr(0, s).toLowerCase() === n && t(f); }) : function (f) { var d = r.getAttributeValue(f, a); return d != null && (d.length === s || d.charAt(s) === "-") && d.substr(0, s) === n && t(f); }; }, element: function (t, e, u) { var r = u.adapter, a = e.name, n = e.value; if (/\s/.test(n))
        return ot.default.falseFunc; var s = new RegExp("(?:^|\\s)".concat(Ir(n), "(?:$|\\s)"), Ie(e, u) ? "i" : ""); return function (f) { var d = r.getAttributeValue(f, a); return d != null && d.length >= n.length && s.test(d) && t(f); }; }, exists: function (t, _a, _b) {
        var e = _a.name;
        var u = _b.adapter;
        return function (r) { return u.hasAttrib(r, e) && t(r); };
    }, start: function (t, e, u) { var r = u.adapter, a = e.name, n = e.value, s = n.length; return s === 0 ? ot.default.falseFunc : Ie(e, u) ? (n = n.toLowerCase(), function (o) { var f = r.getAttributeValue(o, a); return f != null && f.length >= s && f.substr(0, s).toLowerCase() === n && t(o); }) : function (o) { var f; return !!(!((f = r.getAttributeValue(o, a)) === null || f === void 0) && f.startsWith(n)) && t(o); }; }, end: function (t, e, u) { var r = u.adapter, a = e.name, n = e.value, s = -n.length; return s === 0 ? ot.default.falseFunc : Ie(e, u) ? (n = n.toLowerCase(), function (o) { var f; return ((f = r.getAttributeValue(o, a)) === null || f === void 0 ? void 0 : f.substr(s).toLowerCase()) === n && t(o); }) : function (o) { var f; return !!(!((f = r.getAttributeValue(o, a)) === null || f === void 0) && f.endsWith(n)) && t(o); }; }, any: function (t, e, u) { var r = u.adapter, a = e.name, n = e.value; if (n === "")
        return ot.default.falseFunc; if (Ie(e, u)) {
        var s_1 = new RegExp(Ir(n), "i");
        return function (f) { var d = r.getAttributeValue(f, a); return d != null && d.length >= n.length && s_1.test(d) && t(f); };
    } return function (s) { var o; return !!(!((o = r.getAttributeValue(s, a)) === null || o === void 0) && o.includes(n)) && t(s); }; }, not: function (t, e, u) { var r = u.adapter, a = e.name, n = e.value; return n === "" ? function (s) { return !!r.getAttributeValue(s, a) && t(s); } : Ie(e, u) ? (n = n.toLowerCase(), function (s) { var o = r.getAttributeValue(s, a); return (o == null || o.length !== n.length || o.toLowerCase() !== n) && t(s); }) : function (s) { return r.getAttributeValue(s, a) !== n && t(s); }; } };
var ma = new Set([9, 10, 12, 13, 32]), Lr = 48, xa = 57;
function Or(t) { if (t = t.trim().toLowerCase(), t === "even")
    return [2, 0]; if (t === "odd")
    return [2, 1]; var e = 0, u = 0, r = n(), a = s(); if (e < t.length && t.charAt(e) === "n" && (e++, u = r * (a != null ? a : 1), o(), e < t.length ? (r = n(), o(), a = s()) : r = a = 0), a === null || e < t.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(t, "')")); return [u, r * a]; function n() { return t.charAt(e) === "-" ? (e++, -1) : (t.charAt(e) === "+" && e++, 1); } function s() { var f = e, d = 0; for (; e < t.length && t.charCodeAt(e) >= Lr && t.charCodeAt(e) <= xa;)
    d = d * 10 + (t.charCodeAt(e) - Lr), e++; return e === f ? null : d; } function o() { for (; e < t.length && ma.has(t.charCodeAt(e));)
    e++; } }
var Au = Ne(Te(), 1);
function Ur(t) { var e = t[0], u = t[1] - 1; if (u < 0 && e <= 0)
    return Au.default.falseFunc; if (e === -1)
    return function (n) { return n <= u; }; if (e === 0)
    return function (n) { return n === u; }; if (e === 1)
    return u < 0 ? Au.default.trueFunc : function (n) { return n >= u; }; var r = Math.abs(e), a = (u % r + r) % r; return e > 1 ? function (n) { return n >= u && n % r === a; } : function (n) { return n <= u && n % r === a; }; }
function $e(t) { return Ur(Or(t)); }
var te = Ne(Te(), 1);
function It(t, e) { return function (u) { var r = e.getParent(u); return r != null && e.isTag(r) && t(u); }; }
var We = { contains: function (t, e, _a) {
        var u = _a.adapter;
        return function (a) { return t(a) && u.getText(a).includes(e); };
    }, icontains: function (t, e, _a) {
        var u = _a.adapter;
        var r = e.toLowerCase();
        return function (n) { return t(n) && u.getText(n).toLowerCase().includes(r); };
    }, "nth-child": function (t, e, _a) {
        var u = _a.adapter, r = _a.equals;
        var a = $e(e);
        return a === te.default.falseFunc ? te.default.falseFunc : a === te.default.trueFunc ? It(t, u) : function (s) { var o = u.getSiblings(s), f = 0; for (var d = 0; d < o.length && !r(s, o[d]); d++)
            u.isTag(o[d]) && f++; return a(f) && t(s); };
    }, "nth-last-child": function (t, e, _a) {
        var u = _a.adapter, r = _a.equals;
        var a = $e(e);
        return a === te.default.falseFunc ? te.default.falseFunc : a === te.default.trueFunc ? It(t, u) : function (s) { var o = u.getSiblings(s), f = 0; for (var d = o.length - 1; d >= 0 && !r(s, o[d]); d--)
            u.isTag(o[d]) && f++; return a(f) && t(s); };
    }, "nth-of-type": function (t, e, _a) {
        var u = _a.adapter, r = _a.equals;
        var a = $e(e);
        return a === te.default.falseFunc ? te.default.falseFunc : a === te.default.trueFunc ? It(t, u) : function (s) { var o = u.getSiblings(s), f = 0; for (var d = 0; d < o.length; d++) {
            var g = o[d];
            if (r(s, g))
                break;
            u.isTag(g) && u.getName(g) === u.getName(s) && f++;
        } return a(f) && t(s); };
    }, "nth-last-of-type": function (t, e, _a) {
        var u = _a.adapter, r = _a.equals;
        var a = $e(e);
        return a === te.default.falseFunc ? te.default.falseFunc : a === te.default.trueFunc ? It(t, u) : function (s) { var o = u.getSiblings(s), f = 0; for (var d = o.length - 1; d >= 0; d--) {
            var g = o[d];
            if (r(s, g))
                break;
            u.isTag(g) && u.getName(g) === u.getName(s) && f++;
        } return a(f) && t(s); };
    }, root: function (t, e, _a) {
        var u = _a.adapter;
        return function (r) { var a = u.getParent(r); return (a == null || !u.isTag(a)) && t(r); };
    }, scope: function (t, e, u, r) { var a = u.equals; return !r || r.length === 0 ? We.root(t, e, u) : r.length === 1 ? function (n) { return a(r[0], n) && t(n); } : function (n) { return r.includes(n) && t(n); }; }, hover: Eu("isHovered"), visited: Eu("isVisited"), active: Eu("isActive") };
function Eu(t) { return function (u, r, _a) {
    var a = _a.adapter;
    var n = a[t];
    return typeof n != "function" ? te.default.falseFunc : function (o) { return n(o) && u(o); };
}; }
var ft = { empty: function (t, _a) {
        var e = _a.adapter;
        return !e.getChildren(t).some(function (u) { return e.isTag(u) || e.getText(u) !== ""; });
    }, "first-child": function (t, _a) {
        var e = _a.adapter, u = _a.equals;
        if (e.prevElementSibling)
            return e.prevElementSibling(t) == null;
        var r = e.getSiblings(t).find(function (a) { return e.isTag(a); });
        return r != null && u(t, r);
    }, "last-child": function (t, _a) {
        var e = _a.adapter, u = _a.equals;
        var r = e.getSiblings(t);
        for (var a = r.length - 1; a >= 0; a--) {
            if (u(t, r[a]))
                return !0;
            if (e.isTag(r[a]))
                break;
        }
        return !1;
    }, "first-of-type": function (t, _a) {
        var e = _a.adapter, u = _a.equals;
        var r = e.getSiblings(t), a = e.getName(t);
        for (var n = 0; n < r.length; n++) {
            var s = r[n];
            if (u(t, s))
                return !0;
            if (e.isTag(s) && e.getName(s) === a)
                break;
        }
        return !1;
    }, "last-of-type": function (t, _a) {
        var e = _a.adapter, u = _a.equals;
        var r = e.getSiblings(t), a = e.getName(t);
        for (var n = r.length - 1; n >= 0; n--) {
            var s = r[n];
            if (u(t, s))
                return !0;
            if (e.isTag(s) && e.getName(s) === a)
                break;
        }
        return !1;
    }, "only-of-type": function (t, _a) {
        var e = _a.adapter, u = _a.equals;
        var r = e.getName(t);
        return e.getSiblings(t).every(function (a) { return u(t, a) || !e.isTag(a) || e.getName(a) !== r; });
    }, "only-child": function (t, _a) {
        var e = _a.adapter, u = _a.equals;
        return e.getSiblings(t).every(function (r) { return u(t, r) || !e.isTag(r); });
    } };
function Tu(t, e, u, r) { if (u === null) {
    if (t.length > r)
        throw new Error("Pseudo-class :".concat(e, " requires an argument"));
}
else if (t.length === r)
    throw new Error("Pseudo-class :".concat(e, " doesn't have any arguments")); }
var Dt = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var se = Ne(Te(), 1);
var Cu = {};
function qu(t, e) { return t === se.default.falseFunc ? se.default.falseFunc : function (u) { return e.isTag(u) && t(u); }; }
function Iu(t, e) { var u = e.getSiblings(t); if (u.length <= 1)
    return []; var r = u.indexOf(t); return r < 0 || r === u.length - 1 ? [] : u.slice(r + 1).filter(e.isTag); }
function Nu(t) { return { xmlMode: !!t.xmlMode, lowerCaseAttributeNames: !!t.lowerCaseAttributeNames, lowerCaseTags: !!t.lowerCaseTags, quirksMode: !!t.quirksMode, cacheResults: !!t.cacheResults, pseudos: t.pseudos, adapter: t.adapter, equals: t.equals }; }
var ku = function (t, e, u, r, a) { var n = a(e, Nu(u), r); return n === se.default.trueFunc ? t : n === se.default.falseFunc ? se.default.falseFunc : function (s) { return n(s) && t(s); }; }, Lt = { is: ku, matches: ku, where: ku, not: function (t, e, u, r, a) { var n = a(e, Nu(u), r); return n === se.default.falseFunc ? t : n === se.default.trueFunc ? se.default.falseFunc : function (s) { return !n(s) && t(s); }; }, has: function (t, e, u, r, a) { var n = u.adapter, s = Nu(u); s.relativeSelector = !0; var o = e.some(function (g) { return g.some(ct); }) ? [Cu] : void 0, f = a(e, s, o); if (f === se.default.falseFunc)
        return se.default.falseFunc; var d = qu(f, n); if (o && f !== se.default.trueFunc) {
        var _a = f.shouldTestNextSiblings, g_1 = _a === void 0 ? !1 : _a;
        return function (k) { if (!t(k))
            return !1; o[0] = k; var y = n.getChildren(k), w = g_1 ? __spreadArray(__spreadArray([], __read(y), false), __read(Iu(k, n)), false) : y; return n.existsOne(d, w); };
    } return function (g) { return t(g) && n.existsOne(d, n.getChildren(g)); }; } };
function Mr(t, e, u, r, a) { var n; var s = e.name, o = e.data; if (Array.isArray(o)) {
    if (!(s in Lt))
        throw new Error("Unknown pseudo-class :".concat(s, "(").concat(o, ")"));
    return Lt[s](t, o, u, r, a);
} var f = (n = u.pseudos) === null || n === void 0 ? void 0 : n[s], d = typeof f == "string" ? f : Dt[s]; if (typeof d == "string") {
    if (o != null)
        throw new Error("Pseudo ".concat(s, " doesn't have any arguments"));
    var g = Ee(d);
    return Lt.is(t, g, u, r, a);
} if (typeof f == "function")
    return Tu(f, s, o, 1), function (g) { return f(g, o) && t(g); }; if (s in We)
    return We[s](t, o, u, r); if (s in ft) {
    var g_2 = ft[s];
    return Tu(g_2, s, o, 2), function (k) { return g_2(k, u, o) && t(k); };
} throw new Error("Unknown pseudo-class :".concat(s)); }
function Du(t, e) { var u = e.getParent(t); return u && e.isTag(u) ? u : null; }
function Pr(t, e, u, r, a) { var n = u.adapter, s = u.equals; switch (e.type) {
    case S.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case S.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case S.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), Dr[e.action](t, e, u);
    }
    case S.Pseudo: return Mr(t, e, u, r, a);
    case S.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var o_1 = e.name;
        return (!u.xmlMode || u.lowerCaseTags) && (o_1 = o_1.toLowerCase()), function (d) { return n.getName(d) === o_1 && t(d); };
    }
    case S.Descendant: {
        if (u.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (d) { var g = d; for (; g = Du(g, n);)
                if (t(g))
                    return !0; return !1; };
        var o_2 = new WeakSet;
        return function (d) { var g = d; for (; g = Du(g, n);)
            if (!o_2.has(g)) {
                if (n.isTag(g) && t(g))
                    return !0;
                o_2.add(g);
            } return !1; };
    }
    case "_flexibleDescendant": return function (f) { var d = f; do
        if (t(d))
            return !0;
    while (d = Du(d, n)); return !1; };
    case S.Parent: return function (f) { return n.getChildren(f).some(function (d) { return n.isTag(d) && t(d); }); };
    case S.Child: return function (f) { var d = n.getParent(f); return d != null && n.isTag(d) && t(d); };
    case S.Sibling: return function (f) { var d = n.getSiblings(f); for (var g = 0; g < d.length; g++) {
        var k = d[g];
        if (s(f, k))
            break;
        if (n.isTag(k) && t(k))
            return !0;
    } return !1; };
    case S.Adjacent: return n.prevElementSibling ? function (f) { var d = n.prevElementSibling(f); return d != null && t(d); } : function (f) { var d = n.getSiblings(f), g; for (var k = 0; k < d.length; k++) {
        var y = d[k];
        if (s(f, y))
            break;
        n.isTag(y) && (g = y);
    } return !!g && t(g); };
    case S.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return t;
    }
} }
function Br(t, e, u) { var r = Ot(t, e, u); return qu(r, e.adapter); }
function Ot(t, e, u) { var r = typeof t == "string" ? Ee(t) : t; return Ut(r, e, u); }
function Rr(t) { return t.type === S.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function (e) { return e.some(Rr); })); }
var ya = { type: S.Descendant }, va = { type: "_flexibleDescendant" }, wa = { type: S.Pseudo, name: "scope", data: null };
function Sa(t, _a, u) {
    var e_6, _b;
    var e = _a.adapter;
    var r = !!(u != null && u.every(function (a) { var n = e.isTag(a) && e.getParent(a); return a === Cu || n && e.isTag(n); }));
    try {
        for (var t_1 = __values(t), t_1_1 = t_1.next(); !t_1_1.done; t_1_1 = t_1.next()) {
            var a = t_1_1.value;
            if (!(a.length > 0 && ct(a[0]) && a[0].type !== S.Descendant))
                if (r && !a.some(Rr))
                    a.unshift(ya);
                else
                    continue;
            a.unshift(wa);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (t_1_1 && !t_1_1.done && (_b = t_1.return)) _b.call(t_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function Ut(t, e, u) { var r; t.forEach(Su), u = (r = e.context) !== null && r !== void 0 ? r : u; var a = Array.isArray(u), n = u && (Array.isArray(u) ? u : [u]); if (e.relativeSelector !== !1)
    Sa(t, e, n);
else if (t.some(function (f) { return f.length > 0 && ct(f[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var s = !1, o = t.map(function (f) { if (f.length >= 2) {
    var _a = __read(f, 2), d = _a[0], g = _a[1];
    d.type !== S.Pseudo || d.name !== "scope" || (a && g.type === S.Descendant ? f[1] = va : (g.type === S.Adjacent || g.type === S.Sibling) && (s = !0));
} return Aa(f, e, n); }).reduce(Ea, me.default.falseFunc); return o.shouldTestNextSiblings = s, o; }
function Aa(t, e, u) { var r; return t.reduce(function (a, n) { return a === me.default.falseFunc ? me.default.falseFunc : Pr(a, n, e, u, Ut); }, (r = e.rootFunc) !== null && r !== void 0 ? r : me.default.trueFunc); }
function Ea(t, e) { return e === me.default.falseFunc || t === me.default.trueFunc ? t : t === me.default.falseFunc || e === me.default.trueFunc ? e : function (r) { return t(r) || e(r); }; }
var Hr = function (t, e) { return t === e; }, Ta = { adapter: de, equals: Hr };
function Fr(t) { var e, u, r, a; var n = t != null ? t : Ta; return (e = n.adapter) !== null && e !== void 0 || (n.adapter = de), (u = n.equals) !== null && u !== void 0 || (n.equals = (a = (r = n.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && a !== void 0 ? a : Hr), n; }
function Ou(t) { return function (u, r, a) { var n = Fr(r); return t(u, n, a); }; }
var Xn = Ou(Br), Zn = Ou(Ot), Mt = Ou(Ut);
function Vr(t) { return function (u, r, a) { var n = Fr(a); typeof u != "function" && (u = Ot(u, n, r)); var s = Pt(r, n.adapter, u.shouldTestNextSiblings); return t(u, s, n); }; }
function Pt(t, e, u) {
    if (u === void 0) { u = !1; }
    return u && (t = ka(t, e)), Array.isArray(t) ? e.removeSubsets(t) : e.getChildren(t);
}
function ka(t, e) { var u = Array.isArray(t) ? t.slice(0) : [t], r = u.length; for (var a = 0; a < r; a++) {
    var n = Iu(u[a], e);
    u.push.apply(u, __spreadArray([], __read(n), false));
} return u; }
var Yn = Vr(function (t, e, u) { return t === Lu.default.falseFunc || !e || e.length === 0 ? [] : u.adapter.findAll(t, e); }), _n = Vr(function (t, e, u) { return t === Lu.default.falseFunc || !e || e.length === 0 ? null : u.adapter.findOne(t, e); });
var Rt = Ne(Te(), 1);
var Na = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Ke(t) { return t.type !== "pseudo" ? !1 : Na.has(t.name) ? !0 : t.name === "not" && Array.isArray(t.data) ? t.data.some(function (e) { return e.some(Ke); }) : !1; }
function Gr(t, e, u) { var r = e != null ? parseInt(e, 10) : NaN; switch (t) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(r) ? r >= 0 ? r + 1 : 1 / 0 : 0;
    case "lt": return isFinite(r) ? r >= 0 ? Math.min(r, u) : 1 / 0 : 0;
    case "gt": return isFinite(r) ? 1 / 0 : 0;
    case "odd": return 2 * u;
    case "even": return 2 * u - 1;
    case "last":
    case "not": return 1 / 0;
} }
function jr(t) { for (; t.parent;)
    t = t.parent; return t; }
function Bt(t) {
    var e_7, _a;
    var e = [], u = [];
    try {
        for (var t_2 = __values(t), t_2_1 = t_2.next(); !t_2_1.done; t_2_1 = t_2.next()) {
            var r = t_2_1.value;
            r.some(Ke) ? e.push(r) : u.push(r);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (t_2_1 && !t_2_1.done && (_a = t_2.return)) _a.call(t_2);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return [u, e];
}
var Ca = { type: S.Universal, namespace: null }, qa = { type: S.Pseudo, name: "scope", data: null };
function Pu(t, e, u) {
    if (u === void 0) { u = {}; }
    return Ia([t], e, u);
}
function Ia(t, e, u) {
    if (u === void 0) { u = {}; }
    if (typeof e == "function")
        return t.some(e);
    var _a = __read(Bt(Ee(e)), 2), r = _a[0], a = _a[1];
    return r.length > 0 && t.some(Mt(r, u)) || a.some(function (n) { return zr(n, t, u).length > 0; });
}
function Da(t, e, u, r) { var a = typeof u == "string" ? parseInt(u, 10) : NaN; switch (t) {
    case "first":
    case "lt": return e;
    case "last": return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq": return isFinite(a) && Math.abs(a) < e.length ? [a < 0 ? e[e.length + a] : e[a]] : [];
    case "gt": return isFinite(a) ? e.slice(a + 1) : [];
    case "even": return e.filter(function (n, s) { return s % 2 === 0; });
    case "odd": return e.filter(function (n, s) { return s % 2 === 1; });
    case "not": {
        var n_1 = new Set(La(u, e, r));
        return e.filter(function (s) { return !n_1.has(s); });
    }
} }
function La(t, e, u) { if (e.length === 0)
    return []; var _a = __read(Bt(t), 2), r = _a[0], a = _a[1], n; if (r.length) {
    var s = Mu(e, r, u);
    if (a.length === 0)
        return s;
    s.length && (n = new Set(s));
} for (var s = 0; s < a.length && (n == null ? void 0 : n.size) !== e.length; s++) {
    var o = a[s];
    if ((n ? e.filter(function (g) { return H(g) && !n.has(g); }) : e).length === 0)
        break;
    var d = zr(o, e, u);
    if (d.length)
        if (n)
            d.forEach(function (g) { return n.add(g); });
        else {
            if (s === a.length - 1)
                return d;
            n = new Set(d);
        }
} return typeof n != "undefined" ? n.size === e.length ? e : e.filter(function (s) { return n.has(s); }) : []; }
function zr(t, e, u) { var r; if (t.some(qe)) {
    var a = (r = u.root) !== null && r !== void 0 ? r : jr(e[0]), n = ke(oe({}, u), { context: e, relativeSelector: !1 });
    return t.push(qa), Ht(a, t, n, !0, e.length);
} return Ht(e, t, u, !1, e.length); }
function Bu(t, e, u, r) {
    if (u === void 0) { u = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof t == "function")
        return $r(e, t);
    var _a = __read(Bt(Ee(t)), 2), a = _a[0], n = _a[1], s = n.map(function (o) { return Ht(e, o, u, !0, r); });
    return a.length && s.push(Uu(e, a, u, r)), s.length === 0 ? [] : s.length === 1 ? s[0] : yu(s.reduce(function (o, f) { return __spreadArray(__spreadArray([], __read(o), false), __read(f), false); }));
}
function Ht(t, e, u, r, a) { var n = e.findIndex(Ke), s = e.slice(0, n), o = e[n], f = e.length - 1 === n ? a : 1 / 0, d = Gr(o.name, o.data, f); if (d === 0)
    return []; var k = (s.length === 0 && !Array.isArray(t) ? Et(t).filter(H) : s.length === 0 ? (Array.isArray(t) ? t : [t]).filter(H) : r || s.some(qe) ? Uu(t, [s], u, d) : Mu(t, [s], u)).slice(0, d), y = Da(o.name, k, o.data, u); if (y.length === 0 || e.length === n + 1)
    return y; var w = e.slice(n + 1), N = w.some(qe); if (N) {
    if (qe(w[0])) {
        var U = w[0].type;
        (U === S.Sibling || U === S.Adjacent) && (y = Pt(y, de, !0)), w.unshift(Ca);
    }
    u = ke(oe({}, u), { relativeSelector: !1, rootFunc: function (U) { return y.includes(U); } });
}
else
    u.rootFunc && u.rootFunc !== Rt.trueFunc && (u = ke(oe({}, u), { rootFunc: Rt.trueFunc })); return w.some(Ke) ? Ht(y, w, u, !1, a) : N ? Uu(y, [w], u, a) : Mu(y, [w], u); }
function Uu(t, e, u, r) { var a = Mt(e, u, t); return $r(t, a, r); }
function $r(t, e, u) {
    if (u === void 0) { u = 1 / 0; }
    var r = Pt(t, de, e.shouldTestNextSiblings);
    return kt(function (a) { return H(a) && e(a); }, r, !0, u);
}
function Mu(t, e, u) { var r = (Array.isArray(t) ? t : [t]).filter(H); if (r.length === 0)
    return r; var a = Mt(e, u); return a === Rt.trueFunc ? r : r.filter(a); }
function Wr(t) { var e = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(t) || []; return { scheme: e[1], auth: e[2], path: e[3] || "", query: e[4], frag: e[5] }; }
function Ru(t) { var e = [], u = t.split("/"); for (var r = 0; r < u.length; r++) {
    var a = u[r];
    a === ".." ? (e.length > 1 && e.pop(), r === u.length - 1 && e.push("")) : a === "." ? r === u.length - 1 && e.push("") : e.push(a);
} return e.join("/"); }
function Vt(t, e) { e = e == null ? "" : String(e).trim(); var u = Wr(e); if (u.scheme || !t)
    return e; var r = Wr(String(t)); if (!r.scheme)
    return e; var a = r.auth, n, s; if (u.auth !== void 0)
    a = u.auth, n = Ru(u.path), s = u.query;
else if (!u.path)
    n = r.path, s = u.query !== void 0 ? u.query : r.query;
else {
    if (u.path.charAt(0) === "/")
        n = Ru(u.path);
    else {
        var o = a !== void 0 && !r.path ? "/" : r.path.slice(0, r.path.lastIndexOf("/") + 1);
        n = Ru(o + u.path);
    }
    s = u.query;
} return a !== void 0 && n.charAt(0) !== "/" && (n = "/" + n), r.scheme + ":" + (a !== void 0 ? "//" + a : "") + n + (s !== void 0 ? "?" + s : "") + (u.frag !== void 0 ? "#" + u.frag : ""); }
var Ft = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Kr(t) { if (typeof btoa == "function")
    return btoa(t); var e = ""; for (var u = 0; u < t.length; u += 3) {
    var r = t.charCodeAt(u), a = t.charCodeAt(u + 1), n = t.charCodeAt(u + 2), s = r << 16 | (a || 0) << 8 | (n || 0);
    e += Ft[s >> 18 & 63] + Ft[s >> 12 & 63] + (u + 1 < t.length ? Ft[s >> 6 & 63] : "=") + (u + 2 < t.length ? Ft[s & 63] : "=");
} return e; }
var Oa = function (t, e, u) { return Bu(t, e, u); }, Zr = function (t, e, u) { return Bu(t, e, u, 1)[0] || null; }, Yr = /[\s ]+/g, Jr = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), Ua = { containsOwn: function (t, e) { return Fu(t).toLowerCase().includes(String(e).toLowerCase()); }, matches: function (t, e) { return Qr(e).test(Hu(t)); }, matchesOwn: function (t, e) { return Qr(e).test(Fu(t)); }, containsData: function (t, e) { return Se(t).includes(e); }, "contains-ci": function (t, e) { return Hu(t).toLowerCase().includes(String(e).toLowerCase()); } };
function Qr(t) { try {
    return new RegExp(t);
}
catch (e) {
    return /$^/;
} }
var Gt = { pseudos: Ua, xmlMode: !1, lowerCaseTags: !0 };
function jt(t) { return String(t).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Hu(t) { if (!t)
    return ""; if (t.type === "text")
    return t.data; var e = "", u = function (r) {
    var e_8, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var a = _c.value;
            a.type === "text" ? e += a.data : (a.type === "tag" || a.type === "script" || a.type === "style") && (a.name === "br" ? e += " " : a.type === "tag" && (Jr.has(a.name) && (e += " "), u(a), Jr.has(a.name) && (e += " ")));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
}; return u(t), e.replace(Yr, " ").trim(); }
function Fu(t) {
    var e_9, _a;
    var e = "";
    try {
        for (var _b = __values(t.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var u = _c.value;
            u.type === "text" && (e += u.data);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return e.replace(Yr, " ").trim();
}
function _r(t, e) { if (!e)
    return ""; try {
    return Vt(t, e);
}
catch (u) {
    return t ? "" : e;
} }
var De = (function () {
    function t(e, u) {
        this.node = e, this.doc = u;
    }
    Object.defineProperty(t.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    t.prototype.select = function (e) { return he.of(Oa(jt(e), this.node, Gt), this.doc); };
    t.prototype.selectFirst = function (e) { var u = Zr(jt(e), this.node, Gt); return u ? new t(u, this.doc) : null; };
    t.prototype.is = function (e) { return Pu(this.node, jt(e), Gt); };
    t.prototype.text = function () { return Hu(this.node); };
    t.prototype.ownText = function () { return Fu(this.node); };
    t.prototype.wholeText = function () { return Se(this.node); };
    t.prototype.data = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return e.data; }).join(""); };
    t.prototype.html = function () { return (this.node.children || []).map(function (e) { return je(e, { decodeEntities: !1 }); }).join("").trim(); };
    t.prototype.outerHtml = function () { return je(this.node, { decodeEntities: !1 }); };
    t.prototype.toString = function () { return this.outerHtml(); };
    t.prototype.tagName = function () { return this.node.name || ""; };
    t.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    t.prototype.id = function () { return this.attr("id"); };
    t.prototype.className = function () { return this.attr("class"); };
    t.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    t.prototype.hasClass = function (e) { return this.classNames().includes(e); };
    t.prototype.attr = function (e, u) { if (u !== void 0)
        return this.node.attribs && (this.node.attribs[e] = String(u)), this; if (!this.node.attribs)
        return ""; if (e.startsWith("abs:"))
        return _r(this.baseUri, this.node.attribs[e.slice(4)] || ""); var r = this.node.attribs[e]; return r == null ? "" : r; };
    t.prototype.absUrl = function (e) { return this.attr("abs:" + e); };
    t.prototype.hasAttr = function (e) { return !!(this.node.attribs && (e.startsWith("abs:") ? e.slice(4) : e) in this.node.attribs); };
    t.prototype.removeAttr = function (e) { return this.node.attribs && delete this.node.attribs[e], this; };
    t.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    t.prototype.dataset = function () {
        var e_10, _a;
        var e = {};
        try {
            for (var _b = __values(Object.entries(this.node.attribs || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), u = _d[0], r = _d[1];
                u.startsWith("data-") && (e[u.slice(5)] = r);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return e;
    };
    t.prototype.val = function () { return this.attr("value"); };
    t.prototype.parent = function () { var e = this.node.parent; return e && e.type !== "root" ? new t(e, this.doc) : null; };
    t.prototype.parents = function () { var e = [], u = this.node.parent; for (; u && u.type !== "root";)
        e.push(u), u = u.parent; return he.of(e, this.doc); };
    t.prototype.closest = function (e) { var u = this.node; for (; u && u.type !== "root";) {
        if (u.type === "tag" && Pu(u, jt(e), Gt))
            return new t(u, this.doc);
        u = u.parent;
    } return null; };
    t.prototype.children = function () { return he.of((this.node.children || []).filter(H), this.doc); };
    t.prototype.child = function (e) { var u = (this.node.children || []).filter(H)[e]; return u ? new t(u, this.doc) : null; };
    t.prototype.childrenSize = function () { return (this.node.children || []).filter(H).length; };
    t.prototype.nextElementSibling = function () { var e = pu(this.node); return e ? new t(e, this.doc) : null; };
    t.prototype.previousElementSibling = function () { var e = gu(this.node); return e ? new t(e, this.doc) : null; };
    t.prototype.siblingElements = function () {
        var _this = this;
        return he.of(Tt(this.node).filter(function (e) { return e !== _this.node && H(e); }), this.doc);
    };
    t.prototype.elementSiblingIndex = function () { return Tt(this.node).filter(H).indexOf(this.node); };
    t.prototype.getElementsByTag = function (e) { return this.select(e); };
    t.prototype.getElementsByClass = function (e) { return this.select("." + e); };
    t.prototype.getElementById = function (e) { return this.selectFirst("#" + e); };
    t.prototype.remove = function () { return ge(this.node), this; };
    t.prototype.empty = function () { return this.node.children = [], this; };
    t.prototype.textNodes = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return ({ text: function () { return e.data; }, toString: function () { return e.data; } }); }); };
    t.prototype.title = function () { var e = this.selectFirst("title"); return e ? e.text() : ""; };
    t.prototype.body = function () { return this.selectFirst("body") || this; };
    t.prototype.head = function () { return this.selectFirst("head") || this; };
    t.prototype.location = function () { return this.baseUri; };
    return t;
}()), Gu = Object.create(Array.prototype), he = { of: Vu, prototype: Gu };
function Vu(t, e) {
    var e_11, _a;
    var u = [];
    try {
        for (var _b = __values(t || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            u.push(r instanceof De ? r : new De(r, e));
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return Object.setPrototypeOf(u, Gu), u;
}
var Xr = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (t) { return this[t] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (t) { return he.of(this[t] ? [this[t]] : [], null); }, text: function () { return this.map(function (t) { return t.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (t) { return t.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (t) { return t.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (t) { return t.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (t, e) {
        var e_12, _a;
        if (e !== void 0)
            return this.forEach(function (u) { return u.attr(t, e); }), this;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var u = _c.value;
                if (u.hasAttr(t))
                    return u.attr(t);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return "";
    }, eachAttr: function (t) { return this.filter(function (e) { return e.hasAttr(t); }).map(function (e) { return e.attr(t); }); }, hasAttr: function (t) { return this.some(function (e) { return e.hasAttr(t); }); }, hasClass: function (t) { return this.some(function (e) { return e.hasClass(t); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (t) {
        var e_13, _a, e_14, _b;
        var e = Vu([]), u = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_14 = void 0, __values(r.select(t))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var a = _g.value;
                        u.has(a.node) || (u.add(a.node), e.push(a));
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return e;
    }, selectFirst: function (t) {
        var e_15, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                var u = e.selectFirst(t);
                if (u)
                    return u;
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return null;
    }, is: function (t) { return this.some(function (e) { return e.is(t); }); }, not: function (t) { return he.of(this.filter(function (e) { return !e.is(t); }), null); }, parents: function () {
        var e_16, _a;
        var t = Vu([]);
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                t.push.apply(t, __spreadArray([], __read(e.parents()), false));
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return t;
    }, next: function () { return he.of(this.map(function (t) { return t.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return he.of(this.map(function (t) { return t.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (t) { return t.remove(); }), this; }, empty: function () { return this.forEach(function (t) { return t.empty(); }), this; }, removeAttr: function (t) { return this.forEach(function (e) { return e.removeAttr(t); }), this; } };
try {
    for (var _b = __values(Object.keys(Xr)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var t = _c.value;
        Object.defineProperty(Gu, t, { value: Xr[t], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function zt(t, e) { var u = Ar(String(t == null ? "" : t), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new De(u, null); r.doc = r, r.__base = e || ""; var a = Zr("base[href]", u); return a && a.attribs.href && (r.__base = _r(r.__base, a.attribs.href)), r; }
function e0(t, e) { var u = new Set((e || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = zt(t), a = function (n) {
    var e_17, _a, e_18, _b;
    try {
        for (var _c = __values((n.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var s = _d.value;
            if (s.type === "script" || s.type === "style" || s.type === "comment") {
                ge(s);
                continue;
            }
            if (s.type === "tag" && (a(s), !u.has(s.name))) {
                var o = (s.children || []).slice();
                try {
                    for (var o_3 = (e_18 = void 0, __values(o)), o_3_1 = o_3.next(); !o_3_1.done; o_3_1 = o_3.next()) {
                        var f = o_3_1.value;
                        mu(s, f);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (o_3_1 && !o_3_1.done && (_b = o_3.return)) _b.call(o_3);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                ge(s);
            }
        }
    }
    catch (e_17_1) { e_17 = { error: e_17_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_17) throw e_17.error; }
    }
}; return a(r.node), je(r.node.children, { decodeEntities: !1 }); }
var lt = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function Ma(t) { if (typeof Buffer != "undefined")
    return Buffer.from(t).toString("base64"); var e = ""; for (var u = 0; u < t.length; u++)
    e += String.fromCharCode(t[u]); return Kr(e); }
function t0(t) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(t) : Uint8Array.from(unescape(encodeURIComponent(t)), function (e) { return e.charCodeAt(0); }); }
function Pa(t) { var e = ""; for (var u = 0; u < t.length; u++) {
    var r = t.charCodeAt(u);
    if (r < 128) {
        e += t[u];
        continue;
    }
    if (r === 128) {
        e += "€";
        continue;
    }
    var a = t.charCodeAt(u + 1);
    r >= 129 && r <= 254 && a >= 64 && a <= 254 && a !== 127 ? (e += __GBK_TABLE[(r - 129) * 190 + (a - 64) - (a > 127 ? 1 : 0)], u++) : e += "�";
} return e; }
var ju = (function () {
    function ju(e, u) {
        this.status = e.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText || String(this.status), this.url = e.url || u.url, this.headers = e.headers || {}, this._raw = e, this.request = { url: u.url, headers: u.headers || {} };
    }
    ju.prototype.header = function (e) { var u = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(e).toLowerCase(); }); return u ? this.headers[u] : ""; };
    ju.prototype.text = function (e) { if (e && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(e).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var u = this._raw.text == null ? "" : String(this._raw.text); return e || (e = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), e && /^(gbk|gb2312|gb18030)$/i.test(String(e)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(u) && !/[^\x00-\xff]/.test(u) ? Pa(u) : u; };
    ju.prototype.string = function (e) { return this.text(e); };
    ju.prototype.html = function (e) { return zt(this.text(e), this.url); };
    ju.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (e) {
        return null;
    } };
    ju.prototype.base64 = function () { return Ma(this._raw.bytes || t0(this.text())); };
    ju.prototype.blob = function () { var e = this; return { size: (this._raw.bytes || t0(this.text())).length, type: this.header("content-type"), base64: function () { return e.base64(); } }; };
    return ju;
}());
function Ba(t) {
    var e_19, _a;
    var e = {};
    if (!t)
        return e;
    if (typeof t.forEach == "function" && !Array.isArray(t) && typeof t.entries == "function")
        return t.forEach(function (u, r) { e[r] = u; }), e;
    try {
        for (var _b = __values(Object.keys(t)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var u = _c.value;
            e[u] = String(t[u]);
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_19) throw e_19.error; }
    }
    return e;
}
function r0(t, e) { var u = function (s) { return ({ getItem: function (o) { var f = t.storageGet(s + o); return f == null ? null : f; }, setItem: function (o, f) { return t.storageSet(s + o, f == null ? null : String(f)); }, removeItem: function (o) { return t.storageSet(s + o, null); }, clear: function () { return t.storageClear && t.storageClear(s); } }); }, r = "__cookie__", a = {}; a.Response = { success: function (s, o) { return ({ code: 0, data: s === void 0 ? null : s, data2: o === void 0 ? null : o }); }, error: function (s) { return ({ code: 1, data: s == null ? "" : String(s) }); } }, a.fetch = function (o, f) {
    return __awaiter(this, void 0, void 0, function () { var d, U, g, k, y, U, w, N, U_1; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                f = f || {};
                d = String(o);
                if (f.queries) {
                    U = Object.entries(f.queries).map(function (_a) {
                        var _b = __read(_a, 2), Y = _b[0], _ = _b[1];
                        return encodeURIComponent(Y) + "=" + encodeURIComponent(_);
                    }).join("&");
                    U && (d += (d.includes("?") ? "&" : "?") + U);
                }
                g = Object.assign({ "User-Agent": lt }, Ba(f.headers)), k = t.storageGet(r);
                k && !Object.keys(g).some(function (U) { return U.toLowerCase() === "cookie"; }) && (g.Cookie = k);
                y = f.body;
                if (y != null && typeof y == "object") {
                    U = Object.keys(g).find(function (Y) { return Y.toLowerCase() === "content-type"; });
                    U && /json/i.test(g[U]) ? y = JSON.stringify(y) : (y = Object.entries(y).map(function (_a) {
                        var _b = __read(_a, 2), Y = _b[0], _ = _b[1];
                        return encodeURIComponent(Y) + "=" + encodeURIComponent(_);
                    }).join("&"), U || (g["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                w = { url: d, method: (f.method || (y != null ? "POST" : "GET")).toUpperCase(), headers: g, body: y, timeout: f.timeout };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, t.request(w)];
            case 2:
                N = _a.sent();
                return [3, 4];
            case 3:
                U_1 = _a.sent();
                N = { status: 0, url: d, headers: {}, text: "", error: String(U_1 && U_1.message || U_1) };
                return [3, 4];
            case 4: return [2, new ju(N, w)];
        }
    }); });
}, a.Http = { get: function (s) { return u0(a, "GET", s); }, post: function (s) { return u0(a, "POST", s); } }, a.Html = { parse: function (s, o) { return zt(s, o || ""); }, clean: function (s, o) { return e0(s, o); } }, a.localStorage = u("ls:"), a.cacheStorage = u("cs:"), a.localConfig = { getItem: function (s) { return t.config(s); } }, a.localCookie = { setCookie: function (s) { t.storageSet(r, String(s).split(";")[0]); }, getCookie: function () { return t.storageGet(r) || ""; } }, a.sleep = function (s) { return new Promise(function (o) { return typeof setTimeout == "function" ? setTimeout(o, Math.min(Number(s) || 0, 1e4)) : o(); }); }; var n = function () {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    try {
        t.log && t.log(s.map(function (o) { return typeof o == "string" ? o : JSON.stringify(o); }).join(" "));
    }
    catch (o) { }
}; return a.Log = { log: n }, a.console = { log: n, error: n, warn: n, info: n }, a.Console = a.console, a.log = n, a.UserAgent = { system: function () { return lt; }, chrome: function () { return lt; }, android: function () { return lt; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, a.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (t.name || "host") + ")"); } }, a.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, a.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, a.Elements = he, a.Element = De, a.__meta = e, a; }
function u0(t, e, u) { var r = { method: e, url: u, headers: {}, body: void 0, queries: void 0 }, a = { headers: function (n) { return Object.assign(r.headers, n || {}), a; }, header: function (n, s) { return r.headers[n] = s, a; }, params: function (n) { return r.queries = n, a; }, queries: function (n) { return r.queries = n, a; }, body: function (n) { return r.body = n, a; }, html: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, t.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).html(n)];
            }
        }); });
    }, string: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, t.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(n)];
            }
        }); });
    }, text: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, t.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(n)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, t.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).json()];
            }
        }); });
    } }; return a; }
function Le(t, e) { if (!e)
    return ""; if (e = String(e).trim(), /^data:|^blob:/.test(e))
    return e; if (e.startsWith("//"))
    return "https:" + e; if (typeof __abs == "function")
    return __abs(t, e); try {
    return Vt(t, e);
}
catch (u) {
    return e;
} }
var G = function (t) { return t == null ? "" : String(t); }, Ra = function (t) { return t.filter(function (e, u) { return e && t.indexOf(e) === u; }); }, $t = (function () {
    function class_1(e) {
        var u = e.meta, r = e.scripts, a = e.host;
        this.meta = u, this.host = a, this.env = e.env || r0(a, u), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return G(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (e) { return !!this.scripts[e]; };
    class_1.prototype.run = function (e) {
        var u = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            u[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var r, a, n, s;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.scripts[e];
                        if (!r)
                            throw new Error("script " + e + " missing");
                        a = function (o) { var f = _this.host.config(o); return f == null ? (_this.meta.configDefaults || {})[o] : f; };
                        return [4, r(this.env, a)];
                    case 1:
                        n = _a.sent();
                        if (typeof n != "function")
                            throw new Error(e + ": execute() not defined");
                        return [4, n.apply(void 0, __spreadArray([], __read(u.map(G)), false))];
                    case 2:
                        s = _a.sent();
                        if (!s)
                            throw new Error(e + ": empty result");
                        if (s.code !== 0)
                            throw new Error(e + ": " + G(s.data || "error"));
                        return [2, s];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (e) { return G(e).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var e, _a, u_1, u_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    e = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    _a = this.has("home");
                    if (!_a) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _a = (e = (_b.sent()).data || []);
                    _b.label = 3;
                case 3:
                    _a;
                    return [3, 5];
                case 4:
                    u_1 = _b.sent();
                    this.host.log && this.host.log("home: " + u_1.message);
                    return [3, 5];
                case 5:
                    if (!(!e.length && this.has("genre"))) return [3, 9];
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    e = ((_b.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    u_2 = _b.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = e.filter(function (u) { return u && u.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (e, u, r) {
        return __awaiter(this, void 0, void 0, function () {
            var a, n, s, o, f;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        a = e + "|" + u;
                        r = Math.max(1, r | 0);
                        n = r === 1 ? "" : this.tokens[a + "|" + r];
                        if (r > 1 && n == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(e, u, n)];
                    case 1:
                        s = _a.sent(), o = G(s.data2);
                        o && (this.tokens[a + "|" + (r + 1)] = o);
                        f = (s.data || []).filter(Boolean).map(function (d) { return ({ name: G(d.name).trim(), link: Le(d.host || _this.base + "/", d.link), cover: Le(d.host || _this.base + "/", d.cover), description: G(d.description), tag: G(d.tag) }); }).filter(function (d) { return d.name && d.link; });
                        return [2, { items: f, hasNext: !!o && f.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _a.sent();
                    return [2, u[0] ? this.list(this.scriptFile(u[0].script), G(u[0].input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.latest = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _a.sent(), r = u[1] || u[0];
                    return [2, r ? this.list(this.scriptFile(r.script), G(r.input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.search = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, this.has("search") ? this.list("search", e, u) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("detail", e)];
                case 1:
                    u = (_a.sent()).data || {}, r = [].concat(u.genres || [], u.tags || []).map(function (a) { return typeof a == "string" ? a : a && a.title; }).filter(Boolean);
                    return [2, { name: G(u.name).trim(), cover: Le(u.host || this.base + "/", u.cover), author: G(u.author).trim(), description: a0(G(u.description)), detail: a0(G(u.detail)), ongoing: u.ongoing !== !1 && u.ongoing !== "false", genres: Ra(r.map(function (a) { return String(a).trim(); })), url: e, format: G(u.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, r, r_1, r_1_1, a, _a, _b, e_20_1, _c;
            var e_20, _d;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        u = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", e)];
                    case 1:
                        r = (_f.sent()).data || [e];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _f.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        a = r_1_1.value;
                        _b = (_a = u).concat;
                        return [4, this.run("toc", G(a))];
                    case 4:
                        u = _b.apply(_a, [(_f.sent()).data || []]);
                        _f.label = 5;
                    case 5:
                        r_1_1 = r_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_20_1 = _f.sent();
                        e_20 = { error: e_20_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (r_1_1 && !r_1_1.done && (_d = r_1.return)) _d.call(r_1);
                        }
                        finally { if (e_20) throw e_20.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _c = this.has("toc");
                        if (!_c) return [3, 12];
                        return [4, this.run("toc", e)];
                    case 11:
                        _c = (u = (_f.sent()).data || []);
                        _f.label = 12;
                    case 12:
                        _c;
                        _f.label = 13;
                    case 13: return [2, u.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, a) { return ({ name: G(r.name).trim() || "#" + (a + 1), url: Le(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, _a, _b, r, a;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        _a = u = (_c.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", e)];
                    case 3:
                        _b = u = (_c.sent()).data;
                        return [3, 5];
                    case 4:
                        _b = u = [e];
                        _c.label = 5;
                    case 5:
                        _a = _b;
                        _c.label = 6;
                    case 6:
                        _a, typeof u == "string" && (u = u.split(/[\n,]+/));
                        r = function (n) { return !n || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(n)); }, a = function (n) { if (typeof n == "string")
                            return n; if (!n)
                            return ""; var s = n.link || n.url || n.data, o = Array.isArray(n.fallback) ? n.fallback.filter(Boolean) : []; return r(s) && o.length ? o[0] : s; };
                        return [2, (u || []).map(function (n) { return Le(_this.base + "/", a(n)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("chap", e)];
                case 1:
                    u = _a.sent();
                    return [2, { html: G(u.data), title: G(u.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, a, r, u_3, u_3_1, a, n, s, s_2, s_2_1, o, n_2, e_21_1;
            var e_21, _a, e_22, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        u = [{ title: "Default", data: e }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        a = (_c.sent()).data;
                        Array.isArray(a) && a.length && (u = a.map(function (n) { return typeof n == "string" ? { title: "Server", data: n } : { title: G(n.title || n.name || "Server"), data: G(n.data || n.url || n.link) }; }));
                        _c.label = 2;
                    case 2:
                        r = [];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 10, 11, 12]);
                        u_3 = __values(u), u_3_1 = u_3.next();
                        _c.label = 4;
                    case 4:
                        if (!!u_3_1.done) return [3, 9];
                        a = u_3_1.value;
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4, this.run("track", a.data)];
                    case 6:
                        n = (_c.sent()).data || {}, s = Array.isArray(n) ? n : [n];
                        try {
                            for (s_2 = (e_22 = void 0, __values(s)), s_2_1 = s_2.next(); !s_2_1.done; s_2_1 = s_2.next()) {
                                o = s_2_1.value;
                                !o || !o.data || o.type !== "webview" && r.push({ url: Le(o.host || this.base + "/", o.data), quality: a.title + (o.quality ? " " + o.quality : ""), headers: o.headers || { Referer: this.base + "/" }, subtitles: (o.subtitles || (o.subtitle ? [{ data: o.subtitle, label: "Sub" }] : [])).map(function (f) { return ({ file: Le(_this.base + "/", f.data || f.file), label: G(f.label || f.language || "Sub") }); }), mimeType: G(o.mimeType) });
                            }
                        }
                        catch (e_22_1) { e_22 = { error: e_22_1 }; }
                        finally {
                            try {
                                if (s_2_1 && !s_2_1.done && (_b = s_2.return)) _b.call(s_2);
                            }
                            finally { if (e_22) throw e_22.error; }
                        }
                        return [3, 8];
                    case 7:
                        n_2 = _c.sent();
                        this.host.log && this.host.log("track " + a.title + ": " + n_2.message);
                        return [3, 8];
                    case 8:
                        u_3_1 = u_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_21_1 = _c.sent();
                        e_21 = { error: e_21_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (u_3_1 && !u_3_1.done && (_a = u_3.return)) _a.call(u_3);
                        }
                        finally { if (e_21) throw e_21.error; }
                        return [7];
                    case 12: return [2, r];
                }
            });
        });
    };
    return class_1;
}());
function a0(t) {
    return String(t).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var xe = { id: "truyendichain", name: "Truyện Dịch AI", source: "https://truyendichai.top/", type: "novel", locale: "vi_VN", nsfw: !1, version: 1, config: { DOMAIN: { title: "Tên miền", subtitle: "Chọn hoặc nhập tên miền", default: "https://truyendichai.top", mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://truyendichai.top" }, itemType: 2, lnId: "kiritokmn.truyendichain", lnIcon: "", lnVersion: "1.2.1" }, i0 = { home: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, s, o, f, d, g, k, y, w, N, U, Y, _, fe) {
                    return __awaiter(this, void 0, void 0, function () { var j; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                j = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function ue(i, c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, l; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c || (c = {});
                                                        h = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Referer: D + "/" };
                                                        if (c.headers)
                                                            for (l in c.headers)
                                                                h[l] = c.headers[l];
                                                        c.headers = h;
                                                        return [4, u(i, c)];
                                                    case 1: return [2, _a.sent()];
                                                }
                                            }); });
                                        } function O(i) { if (!i || (i = String(i).trim(), !i))
                                            return ""; if (i.indexOf("//") === 0 && (i = "https:" + i), i.indexOf("http://") === 0 || i.indexOf("https://") === 0) {
                                            if (/^https?:\/\/(?:i\.|cdn\.|img\.)/i.test(i) || /\.(?:jpg|jpeg|png|gif|webp)(?:\?.*)?$/i.test(i))
                                                return i;
                                            var c = i.replace(/^(?:https?:\/\/[^\/]+)/i, "");
                                            return D + (c.charAt(0) === "/" ? c : "/" + c);
                                        } return i.charAt(0) === "/" ? D + i : D + "/" + i; } function ye(i, c) { return i = O(i), c = String(c || "1"), c === "1" ? i : /[?&]page=\d+/i.test(i) ? i.replace(/([?&]page=)\d+/i, "$1" + c) : i + (i.indexOf("?") >= 0 ? "&" : "?") + "page=" + c; } function q(i) { return i ? String(i).replace(/\s+/g, " ").trim() : ""; } function re(i) { if (!i)
                                            return 0; try {
                                            if (typeof i.size == "function")
                                                return i.size();
                                            if (typeof i.size == "number")
                                                return i.size;
                                            if (typeof i.length == "number")
                                                return i.length;
                                        }
                                        catch (c) { } return 0; } function $(i, c) { var h = String(i || ""), l = h.match(/[?&]page=(\d+)/i); if (l)
                                            return l[1]; var p = q(c || ""); return /^\d+$/.test(p), p; } function ve(i) { var c = i.select("ul.pagination li.active").first(); if (c) {
                                            var h = i.select("ul.pagination li.active + li:not(.disabled)").first();
                                            if (h) {
                                                var l = h.select("a").first();
                                                if (l)
                                                    return $(l.attr("href"), l.text());
                                            }
                                        } var p = i.select(".pagination li.active + li a, .pagination a[aria-label*='Trang sau'], .pagination a:contains('>')").first(); return p ? $(p.attr("href"), p.text()) : ""; } function ce(i, c, h) { i && i.forEach(function (l) { var p = l.attr("class") || ""; if (!(p.indexOf("work-detail-card") >= 0 || re(l.select(".work-chap-link")) > 0)) {
                                            var x = l.select("a.work-title, h3 a, a[title]").first(), m = x ? x.attr("title") || x.text() : "";
                                            if (m = q(m), !(!m || m.indexOf("Đọc từ đầu") >= 0 || m.indexOf("Mới nhất") >= 0)) {
                                                var v = x ? x.attr("href") : "";
                                                if (!v) {
                                                    var L = l.select("a[href]").first();
                                                    L && (v = L.attr("href"));
                                                }
                                                var C = O(v);
                                                if (!(!C || h[C])) {
                                                    h[C] = !0;
                                                    var M = l.select("img.work-thumb, img").first(), I = M ? M.attr("src") || M.attr("data-src") : "";
                                                    I && (I = O(I));
                                                    var R = l.select("a.work-tag--author, a[href*='/tac-gia/']").first(), K = R ? q(R.text()) : "", B = l.select(".work-summary, p.work-summary, p").first(), V = B ? q(B.text()) : "";
                                                    c.push({ name: m, link: C, cover: I, author: K, description: V, host: A });
                                                }
                                            }
                                        } }); } function W() {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                return [2, T.success([{ title: "Trending", input: A + "/trending", script: "gen.js" }, { title: "Truyện vừa cập nhật", input: A + "/truyen-cap-nhat", script: "gen.js" }, { title: "Mới đăng", input: A + "/tim-kiem?sort=new", script: "gen.js" }, { title: "Xem nhiều", input: A + "/tim-kiem?sort=view", script: "gen.js" }, { title: "Truyện hay", input: A + "/tim-kiem?sort=rate", script: "gen.js" }])];
                                            }); });
                                        } var A, D, T; return __generator(this, function (_a) {
                                            A = "https://truyendichai.top";
                                            try {
                                                j && (A = j);
                                            }
                                            catch (i) { }
                                            D = String(A || "").replace(/\/+$/, "");
                                            if (typeof T == "undefined")
                                                T = { success: function (i, c) { return JSON.stringify({ code: 0, data: i, data2: c }); }, error: function (i) { return JSON.stringify({ code: 1, data: i }); } };
                                            return [2, typeof W == "function" ? W : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, genre: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, s, o, f, d, g, k, y, w, N, U, Y, _, fe) {
                    return __awaiter(this, void 0, void 0, function () { var j; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                j = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function ue(i, c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, l; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c || (c = {});
                                                        h = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Referer: D + "/" };
                                                        if (c.headers)
                                                            for (l in c.headers)
                                                                h[l] = c.headers[l];
                                                        c.headers = h;
                                                        return [4, u(i, c)];
                                                    case 1: return [2, _a.sent()];
                                                }
                                            }); });
                                        } function O(i) { if (!i || (i = String(i).trim(), !i))
                                            return ""; if (i.indexOf("//") === 0 && (i = "https:" + i), i.indexOf("http://") === 0 || i.indexOf("https://") === 0) {
                                            if (/^https?:\/\/(?:i\.|cdn\.|img\.)/i.test(i) || /\.(?:jpg|jpeg|png|gif|webp)(?:\?.*)?$/i.test(i))
                                                return i;
                                            var c = i.replace(/^(?:https?:\/\/[^\/]+)/i, "");
                                            return D + (c.charAt(0) === "/" ? c : "/" + c);
                                        } return i.charAt(0) === "/" ? D + i : D + "/" + i; } function ye(i, c) { return i = O(i), c = String(c || "1"), c === "1" ? i : /[?&]page=\d+/i.test(i) ? i.replace(/([?&]page=)\d+/i, "$1" + c) : i + (i.indexOf("?") >= 0 ? "&" : "?") + "page=" + c; } function q(i) { return i ? String(i).replace(/\s+/g, " ").trim() : ""; } function re(i) { if (!i)
                                            return 0; try {
                                            if (typeof i.size == "function")
                                                return i.size();
                                            if (typeof i.size == "number")
                                                return i.size;
                                            if (typeof i.length == "number")
                                                return i.length;
                                        }
                                        catch (c) { } return 0; } function $(i, c) { var h = String(i || ""), l = h.match(/[?&]page=(\d+)/i); if (l)
                                            return l[1]; var p = q(c || ""); return /^\d+$/.test(p), p; } function ve(i) { var c = i.select("ul.pagination li.active").first(); if (c) {
                                            var h = i.select("ul.pagination li.active + li:not(.disabled)").first();
                                            if (h) {
                                                var l = h.select("a").first();
                                                if (l)
                                                    return $(l.attr("href"), l.text());
                                            }
                                        } var p = i.select(".pagination li.active + li a, .pagination a[aria-label*='Trang sau'], .pagination a:contains('>')").first(); return p ? $(p.attr("href"), p.text()) : ""; } function ce(i, c, h) { i && i.forEach(function (l) { var p = l.attr("class") || ""; if (!(p.indexOf("work-detail-card") >= 0 || re(l.select(".work-chap-link")) > 0)) {
                                            var x = l.select("a.work-title, h3 a, a[title]").first(), m = x ? x.attr("title") || x.text() : "";
                                            if (m = q(m), !(!m || m.indexOf("Đọc từ đầu") >= 0 || m.indexOf("Mới nhất") >= 0)) {
                                                var v = x ? x.attr("href") : "";
                                                if (!v) {
                                                    var L = l.select("a[href]").first();
                                                    L && (v = L.attr("href"));
                                                }
                                                var C = O(v);
                                                if (!(!C || h[C])) {
                                                    h[C] = !0;
                                                    var M = l.select("img.work-thumb, img").first(), I = M ? M.attr("src") || M.attr("data-src") : "";
                                                    I && (I = O(I));
                                                    var R = l.select("a.work-tag--author, a[href*='/tac-gia/']").first(), K = R ? q(R.text()) : "", B = l.select(".work-summary, p.work-summary, p").first(), V = B ? q(B.text()) : "";
                                                    c.push({ name: m, link: C, cover: I, author: K, description: V, host: A });
                                                }
                                            }
                                        } }); } function W() {
                                            return __awaiter(this, void 0, void 0, function () { var i, c, h, l, p, x; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        i = A + "/danh-muc";
                                                        return [4, ue(i)];
                                                    case 1:
                                                        c = _a.sent(), h = [], l = {};
                                                        if (c.ok) {
                                                            p = c.text();
                                                            if (p) {
                                                                x = a.parse(p);
                                                                x && x.select("a[href*='/danh-muc/']").forEach(function (m) { var v = q(m.text()), L = m.attr("href"); v && L && (v = v.replace(/\(\d+\)/g, "").trim(), L = O(L), l[L] || (l[L] = !0, h.push({ title: v, input: L, script: "gen.js" }))); });
                                                            }
                                                        }
                                                        return [2, (h.length || (h = [{ title: "Ngôn tình", input: A + "/danh-muc/ngon-tinh", script: "gen.js" }, { title: "Huyền huyễn", input: A + "/danh-muc/huyen-huyen", script: "gen.js" }, { title: "Kỳ ảo", input: A + "/danh-muc/ky-ao", script: "gen.js" }, { title: "Khoa huyễn", input: A + "/danh-muc/khoa-huyen", script: "gen.js" }, { title: "Đô thị", input: A + "/danh-muc/do-thi", script: "gen.js" }, { title: "Tiên hiệp", input: A + "/danh-muc/tien-hiep", script: "gen.js" }, { title: "Linh dị", input: A + "/danh-muc/linh-di", script: "gen.js" }, { title: "Võng du", input: A + "/danh-muc/vong-du", script: "gen.js" }, { title: "Đam mỹ", input: A + "/danh-muc/dam-my", script: "gen.js" }]), T.success(h))];
                                                }
                                            }); });
                                        } var A, D, T; return __generator(this, function (_a) {
                                            A = "https://truyendichai.top";
                                            try {
                                                j && (A = j);
                                            }
                                            catch (i) { }
                                            D = String(A || "").replace(/\/+$/, "");
                                            if (typeof T == "undefined")
                                                T = { success: function (i, c) { return JSON.stringify({ code: 0, data: i, data2: c }); }, error: function (i) { return JSON.stringify({ code: 1, data: i }); } };
                                            return [2, typeof W == "function" ? W : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, detail: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, s, o, f, d, g, k, y, w, N, U, Y, _, fe) {
                    return __awaiter(this, void 0, void 0, function () { var j; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                j = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function ue(i, c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, l; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c || (c = {});
                                                        h = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Referer: D + "/" };
                                                        if (c.headers)
                                                            for (l in c.headers)
                                                                h[l] = c.headers[l];
                                                        c.headers = h;
                                                        return [4, u(i, c)];
                                                    case 1: return [2, _a.sent()];
                                                }
                                            }); });
                                        } function O(i) { if (!i || (i = String(i).trim(), !i))
                                            return ""; if (i.indexOf("//") === 0 && (i = "https:" + i), i.indexOf("http://") === 0 || i.indexOf("https://") === 0) {
                                            if (/^https?:\/\/(?:i\.|cdn\.|img\.)/i.test(i) || /\.(?:jpg|jpeg|png|gif|webp)(?:\?.*)?$/i.test(i))
                                                return i;
                                            var c = i.replace(/^(?:https?:\/\/[^\/]+)/i, "");
                                            return D + (c.charAt(0) === "/" ? c : "/" + c);
                                        } return i.charAt(0) === "/" ? D + i : D + "/" + i; } function ye(i, c) { return i = O(i), c = String(c || "1"), c === "1" ? i : /[?&]page=\d+/i.test(i) ? i.replace(/([?&]page=)\d+/i, "$1" + c) : i + (i.indexOf("?") >= 0 ? "&" : "?") + "page=" + c; } function q(i) { return i ? String(i).replace(/\s+/g, " ").trim() : ""; } function re(i) { if (!i)
                                            return 0; try {
                                            if (typeof i.size == "function")
                                                return i.size();
                                            if (typeof i.size == "number")
                                                return i.size;
                                            if (typeof i.length == "number")
                                                return i.length;
                                        }
                                        catch (c) { } return 0; } function $(i, c) { var h = String(i || ""), l = h.match(/[?&]page=(\d+)/i); if (l)
                                            return l[1]; var p = q(c || ""); return /^\d+$/.test(p), p; } function ve(i) { var c = i.select("ul.pagination li.active").first(); if (c) {
                                            var h = i.select("ul.pagination li.active + li:not(.disabled)").first();
                                            if (h) {
                                                var l = h.select("a").first();
                                                if (l)
                                                    return $(l.attr("href"), l.text());
                                            }
                                        } var p = i.select(".pagination li.active + li a, .pagination a[aria-label*='Trang sau'], .pagination a:contains('>')").first(); return p ? $(p.attr("href"), p.text()) : ""; } function ce(i, c, h) { i && i.forEach(function (l) { var p = l.attr("class") || ""; if (!(p.indexOf("work-detail-card") >= 0 || re(l.select(".work-chap-link")) > 0)) {
                                            var x = l.select("a.work-title, h3 a, a[title]").first(), m = x ? x.attr("title") || x.text() : "";
                                            if (m = q(m), !(!m || m.indexOf("Đọc từ đầu") >= 0 || m.indexOf("Mới nhất") >= 0)) {
                                                var v = x ? x.attr("href") : "";
                                                if (!v) {
                                                    var L = l.select("a[href]").first();
                                                    L && (v = L.attr("href"));
                                                }
                                                var C = O(v);
                                                if (!(!C || h[C])) {
                                                    h[C] = !0;
                                                    var M = l.select("img.work-thumb, img").first(), I = M ? M.attr("src") || M.attr("data-src") : "";
                                                    I && (I = O(I));
                                                    var R = l.select("a.work-tag--author, a[href*='/tac-gia/']").first(), K = R ? q(R.text()) : "", B = l.select(".work-summary, p.work-summary, p").first(), V = B ? q(B.text()) : "";
                                                    c.push({ name: m, link: C, cover: I, author: K, description: V, host: A });
                                                }
                                            }
                                        } }); } function W(i) {
                                            return __awaiter(this, void 0, void 0, function () { var c, h, l, p, x, m, v, L, C, M, I, R, K, B, V, Je, ht, Oe, Qe, Wu, Ku, Ju, bt, s0; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        i = O(i);
                                                        return [4, ue(i)];
                                                    case 1:
                                                        c = _a.sent();
                                                        if (!c.ok)
                                                            return [2, T.error("HTTP Error: " + c.status)];
                                                        h = c.text();
                                                        if (!h)
                                                            return [2, T.error("Trang trống")];
                                                        l = a.parse(h);
                                                        if (!l)
                                                            return [2, T.error("Không thể parse HTML")];
                                                        p = "", x = l.select(".work-detail-card h1, h1, .work-title").first();
                                                        if (x && (p = q(x.text())), !p) {
                                                            m = l.select("meta[property='og:title']").first();
                                                            m && (p = q(m.attr("content") || ""));
                                                        }
                                                        v = "", L = l.select("meta[property='og:image']").first();
                                                        if (L && (v = L.attr("content") || ""), !v) {
                                                            C = l.select(".work-detail-card img.work-thumb, .cover img, img.work-thumb").first();
                                                            C && (v = C.attr("data-src") || C.attr("src") || "");
                                                        }
                                                        v && (v = O(v));
                                                        M = "", I = l.select("#workDesc, .work-description, p.work-summary").first();
                                                        I && (M = I.html());
                                                        R = "Đang cập nhật", K = l.select("a.work-tag--author, a[href*='/tac-gia/']").first();
                                                        K && (R = q(K.text()) || R);
                                                        B = "Đang ra", V = l.select(".work-detail-card .work-stage-badge, .work-detail-card .badge, .badge").first();
                                                        V && (B = q(V.text()));
                                                        Je = !0, ht = String(B || "").toLowerCase();
                                                        ht.indexOf("hoàn") >= 0 || ht.indexOf("full") >= 0 ? (Je = !1, B = "Hoàn thành") : B = "Đang ra";
                                                        Oe = [], Qe = [], Wu = {};
                                                        l.select("a.work-tag--cat").forEach(function (Xe) { var Ue = q(Xe.text()).replace(/\(\d+\)/g, "").trim(), be = O(Xe.attr("href")); !Ue || !be || Wu[be] || (Wu[be] = !0, Oe.push({ title: Ue, input: be, script: "gen.js" }), Qe.push(Ue)); });
                                                        Ku = [], Ju = {};
                                                        l.select(".work-tags-block a.work-tag-chip, a.work-tag-chip").forEach(function (Xe) { var Ue = q(Xe.text()).replace(/^#\s*/, "").trim(), be = O(Xe.attr("href")); !Ue || !be || Ju[be] || (Ju[be] = !0, Ku.push({ title: Ue, input: be, script: "search.js" })); });
                                                        bt = "";
                                                        bt += "<p><strong>Tác giả:</strong> " + R + "</p>", bt += "<p><strong>Trạng thái:</strong> " + B + "</p>", Qe.length && (bt += "<p><strong>Thể loại:</strong> " + Qe.join(", ") + "</p>");
                                                        s0 = [{ title: "Truyện liên quan", input: Oe.length > 0 ? Oe[0].input : A + "/trending", script: "gen.js" }];
                                                        return [2, T.success({ name: p, cover: v, author: R, description: M, detail: bt, ongoing: Je, type: "novel", format: "novel", genres: Oe, tags: Ku, suggests: s0, comments: [], reviews: [], host: A })];
                                                }
                                            }); });
                                        } var A, D, T; return __generator(this, function (_a) {
                                            A = "https://truyendichai.top";
                                            try {
                                                j && (A = j);
                                            }
                                            catch (i) { }
                                            D = String(A || "").replace(/\/+$/, "");
                                            if (typeof T == "undefined")
                                                T = { success: function (i, c) { return JSON.stringify({ code: 0, data: i, data2: c }); }, error: function (i) { return JSON.stringify({ code: 1, data: i }); } };
                                            return [2, typeof W == "function" ? W : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, search: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, s, o, f, d, g, k, y, w, N, U, Y, _, fe) {
                    return __awaiter(this, void 0, void 0, function () { var j; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                j = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function ue(i, c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, l; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c || (c = {});
                                                        h = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Referer: D + "/" };
                                                        if (c.headers)
                                                            for (l in c.headers)
                                                                h[l] = c.headers[l];
                                                        c.headers = h;
                                                        return [4, u(i, c)];
                                                    case 1: return [2, _a.sent()];
                                                }
                                            }); });
                                        } function O(i) { if (!i || (i = String(i).trim(), !i))
                                            return ""; if (i.indexOf("//") === 0 && (i = "https:" + i), i.indexOf("http://") === 0 || i.indexOf("https://") === 0) {
                                            if (/^https?:\/\/(?:i\.|cdn\.|img\.)/i.test(i) || /\.(?:jpg|jpeg|png|gif|webp)(?:\?.*)?$/i.test(i))
                                                return i;
                                            var c = i.replace(/^(?:https?:\/\/[^\/]+)/i, "");
                                            return D + (c.charAt(0) === "/" ? c : "/" + c);
                                        } return i.charAt(0) === "/" ? D + i : D + "/" + i; } function ye(i, c) { return i = O(i), c = String(c || "1"), c === "1" ? i : /[?&]page=\d+/i.test(i) ? i.replace(/([?&]page=)\d+/i, "$1" + c) : i + (i.indexOf("?") >= 0 ? "&" : "?") + "page=" + c; } function q(i) { return i ? String(i).replace(/\s+/g, " ").trim() : ""; } function re(i) { if (!i)
                                            return 0; try {
                                            if (typeof i.size == "function")
                                                return i.size();
                                            if (typeof i.size == "number")
                                                return i.size;
                                            if (typeof i.length == "number")
                                                return i.length;
                                        }
                                        catch (c) { } return 0; } function $(i, c) { var h = String(i || ""), l = h.match(/[?&]page=(\d+)/i); if (l)
                                            return l[1]; var p = q(c || ""); return /^\d+$/.test(p), p; } function ve(i) { var c = i.select("ul.pagination li.active").first(); if (c) {
                                            var h = i.select("ul.pagination li.active + li:not(.disabled)").first();
                                            if (h) {
                                                var l = h.select("a").first();
                                                if (l)
                                                    return $(l.attr("href"), l.text());
                                            }
                                        } var p = i.select(".pagination li.active + li a, .pagination a[aria-label*='Trang sau'], .pagination a:contains('>')").first(); return p ? $(p.attr("href"), p.text()) : ""; } function ce(i, c, h) { i && i.forEach(function (l) { var p = l.attr("class") || ""; if (!(p.indexOf("work-detail-card") >= 0 || re(l.select(".work-chap-link")) > 0)) {
                                            var x = l.select("a.work-title, h3 a, a[title]").first(), m = x ? x.attr("title") || x.text() : "";
                                            if (m = q(m), !(!m || m.indexOf("Đọc từ đầu") >= 0 || m.indexOf("Mới nhất") >= 0)) {
                                                var v = x ? x.attr("href") : "";
                                                if (!v) {
                                                    var L = l.select("a[href]").first();
                                                    L && (v = L.attr("href"));
                                                }
                                                var C = O(v);
                                                if (!(!C || h[C])) {
                                                    h[C] = !0;
                                                    var M = l.select("img.work-thumb, img").first(), I = M ? M.attr("src") || M.attr("data-src") : "";
                                                    I && (I = O(I));
                                                    var R = l.select("a.work-tag--author, a[href*='/tac-gia/']").first(), K = R ? q(R.text()) : "", B = l.select(".work-summary, p.work-summary, p").first(), V = B ? q(B.text()) : "";
                                                    c.push({ name: m, link: C, cover: I, author: K, description: V, host: A });
                                                }
                                            }
                                        } }); } function W(i, c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, l, p, x, m, v, L, C, M; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        h = "", l = "1";
                                                        Array.isArray(i) ? (h = i[0] || "", l = i[1] || "1") : typeof i == "string" && (h = i, l = c || "1"), h = String(h || "").trim(), l = String(l || "1");
                                                        p = "";
                                                        h.indexOf("http://") === 0 || h.indexOf("https://") === 0 || h.indexOf("/") === 0 ? p = O(h) : h ? p = A + "/tim-kiem?q=" + encodeURIComponent(h) : p = A + "/tim-kiem", p = ye(p, l);
                                                        return [4, ue(p)];
                                                    case 1:
                                                        x = _a.sent();
                                                        if (!x.ok)
                                                            return [2, T.error("HTTP Error: " + x.status)];
                                                        m = x.text();
                                                        if (!m)
                                                            return [2, T.error("Trang trống")];
                                                        v = a.parse(m);
                                                        if (!v)
                                                            return [2, T.error("Không thể parse HTML")];
                                                        L = [], C = {};
                                                        ce(v.select(".single-trending-work"), L, C), ce(v.select(".single-recommended-post"), L, C), ce(v.select(".work-card"), L, C);
                                                        M = ve(v);
                                                        return [2, T.success(L, M)];
                                                }
                                            }); });
                                        } var A, D, T; return __generator(this, function (_a) {
                                            A = "https://truyendichai.top";
                                            try {
                                                j && (A = j);
                                            }
                                            catch (i) { }
                                            D = String(A || "").replace(/\/+$/, "");
                                            if (typeof T == "undefined")
                                                T = { success: function (i, c) { return JSON.stringify({ code: 0, data: i, data2: c }); }, error: function (i) { return JSON.stringify({ code: 1, data: i }); } };
                                            return [2, typeof W == "function" ? W : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, toc: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, s, o, f, d, g, k, y, w, N, U, Y, _, fe) {
                    return __awaiter(this, void 0, void 0, function () { var j; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                j = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function ue(i, c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, l; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c || (c = {});
                                                        h = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Referer: D + "/" };
                                                        if (c.headers)
                                                            for (l in c.headers)
                                                                h[l] = c.headers[l];
                                                        c.headers = h;
                                                        return [4, u(i, c)];
                                                    case 1: return [2, _a.sent()];
                                                }
                                            }); });
                                        } function O(i) { if (!i || (i = String(i).trim(), !i))
                                            return ""; if (i.indexOf("//") === 0 && (i = "https:" + i), i.indexOf("http://") === 0 || i.indexOf("https://") === 0) {
                                            if (/^https?:\/\/(?:i\.|cdn\.|img\.)/i.test(i) || /\.(?:jpg|jpeg|png|gif|webp)(?:\?.*)?$/i.test(i))
                                                return i;
                                            var c = i.replace(/^(?:https?:\/\/[^\/]+)/i, "");
                                            return D + (c.charAt(0) === "/" ? c : "/" + c);
                                        } return i.charAt(0) === "/" ? D + i : D + "/" + i; } function ye(i, c) { return i = O(i), c = String(c || "1"), c === "1" ? i : /[?&]page=\d+/i.test(i) ? i.replace(/([?&]page=)\d+/i, "$1" + c) : i + (i.indexOf("?") >= 0 ? "&" : "?") + "page=" + c; } function q(i) { return i ? String(i).replace(/\s+/g, " ").trim() : ""; } function re(i) { if (!i)
                                            return 0; try {
                                            if (typeof i.size == "function")
                                                return i.size();
                                            if (typeof i.size == "number")
                                                return i.size;
                                            if (typeof i.length == "number")
                                                return i.length;
                                        }
                                        catch (c) { } return 0; } function $(i, c) { var h = String(i || ""), l = h.match(/[?&]page=(\d+)/i); if (l)
                                            return l[1]; var p = q(c || ""); return /^\d+$/.test(p), p; } function ve(i) { var c = i.select("ul.pagination li.active").first(); if (c) {
                                            var h = i.select("ul.pagination li.active + li:not(.disabled)").first();
                                            if (h) {
                                                var l = h.select("a").first();
                                                if (l)
                                                    return $(l.attr("href"), l.text());
                                            }
                                        } var p = i.select(".pagination li.active + li a, .pagination a[aria-label*='Trang sau'], .pagination a:contains('>')").first(); return p ? $(p.attr("href"), p.text()) : ""; } function ce(i, c, h) { i && i.forEach(function (l) { var p = l.attr("class") || ""; if (!(p.indexOf("work-detail-card") >= 0 || re(l.select(".work-chap-link")) > 0)) {
                                            var x = l.select("a.work-title, h3 a, a[title]").first(), m = x ? x.attr("title") || x.text() : "";
                                            if (m = q(m), !(!m || m.indexOf("Đọc từ đầu") >= 0 || m.indexOf("Mới nhất") >= 0)) {
                                                var v = x ? x.attr("href") : "";
                                                if (!v) {
                                                    var L = l.select("a[href]").first();
                                                    L && (v = L.attr("href"));
                                                }
                                                var C = O(v);
                                                if (!(!C || h[C])) {
                                                    h[C] = !0;
                                                    var M = l.select("img.work-thumb, img").first(), I = M ? M.attr("src") || M.attr("data-src") : "";
                                                    I && (I = O(I));
                                                    var R = l.select("a.work-tag--author, a[href*='/tac-gia/']").first(), K = R ? q(R.text()) : "", B = l.select(".work-summary, p.work-summary, p").first(), V = B ? q(B.text()) : "";
                                                    c.push({ name: m, link: C, cover: I, author: K, description: V, host: A });
                                                }
                                            }
                                        } }); } function W(i) {
                                            return __awaiter(this, void 0, void 0, function () { var c, h, l, p, x, m, v, L, C, M, I, R, K, B, V, Je, ht, Oe, Qe; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        i = O(i);
                                                        return [4, ue(i)];
                                                    case 1:
                                                        c = _a.sent();
                                                        if (!c.ok)
                                                            return [2, T.error("HTTP Error: " + c.status)];
                                                        h = c.text();
                                                        if (!h)
                                                            return [2, T.error("Trang trống")];
                                                        l = h.match(/WORK_ID\s*=\s*(\d+)/i);
                                                        if (!l)
                                                            return [2, T.error("Không tìm thấy ID truyện")];
                                                        p = l[1], x = h.match(/WORK_SLUG\s*=\s*['"]([^'"]+)['"]/i), m = x ? x[1] : "";
                                                        if (!m) {
                                                            v = i.replace(A, "").split("?")[0];
                                                            m = v.replace(/^\/+|\/+$/g, "");
                                                        }
                                                        L = A + "/api/chapters/" + p;
                                                        return [4, ue(L)];
                                                    case 2:
                                                        C = _a.sent();
                                                        if (!C.ok)
                                                            return [2, T.error("Không thể tải danh sách chương")];
                                                        M = C.text();
                                                        if (!M)
                                                            return [2, T.error("API danh sách chương trống")];
                                                        I = JSON.parse(M), R = I && I.data ? I.data : I, K = [];
                                                        if (R && R.length > 0)
                                                            for (B = 0; B < R.length; B++) {
                                                                V = R[B], Je = typeof V.code != "undefined" ? V.code : B + 1, ht = typeof V.position != "undefined" ? V.position : B, Oe = "Chương " + Je + (V.name ? ": " + V.name : ""), Qe = "/" + m + "/" + ht + "/chuong-" + Je;
                                                                K.push({ name: Oe, url: Qe, host: A });
                                                            }
                                                        return [2, T.success(K)];
                                                }
                                            }); });
                                        } var A, D, T; return __generator(this, function (_a) {
                                            A = "https://truyendichai.top";
                                            try {
                                                j && (A = j);
                                            }
                                            catch (i) { }
                                            D = String(A || "").replace(/\/+$/, "");
                                            if (typeof T == "undefined")
                                                T = { success: function (i, c) { return JSON.stringify({ code: 0, data: i, data2: c }); }, error: function (i) { return JSON.stringify({ code: 1, data: i }); } };
                                            return [2, typeof W == "function" ? W : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, chap: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, s, o, f, d, g, k, y, w, N, U, Y, _, fe) {
                    return __awaiter(this, void 0, void 0, function () { var j; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                j = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function ue(i, c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, l; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c || (c = {});
                                                        h = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Referer: D + "/" };
                                                        if (c.headers)
                                                            for (l in c.headers)
                                                                h[l] = c.headers[l];
                                                        c.headers = h;
                                                        return [4, u(i, c)];
                                                    case 1: return [2, _a.sent()];
                                                }
                                            }); });
                                        } function O(i) { if (!i || (i = String(i).trim(), !i))
                                            return ""; if (i.indexOf("//") === 0 && (i = "https:" + i), i.indexOf("http://") === 0 || i.indexOf("https://") === 0) {
                                            if (/^https?:\/\/(?:i\.|cdn\.|img\.)/i.test(i) || /\.(?:jpg|jpeg|png|gif|webp)(?:\?.*)?$/i.test(i))
                                                return i;
                                            var c = i.replace(/^(?:https?:\/\/[^\/]+)/i, "");
                                            return D + (c.charAt(0) === "/" ? c : "/" + c);
                                        } return i.charAt(0) === "/" ? D + i : D + "/" + i; } function ye(i, c) { return i = O(i), c = String(c || "1"), c === "1" ? i : /[?&]page=\d+/i.test(i) ? i.replace(/([?&]page=)\d+/i, "$1" + c) : i + (i.indexOf("?") >= 0 ? "&" : "?") + "page=" + c; } function q(i) { return i ? String(i).replace(/\s+/g, " ").trim() : ""; } function re(i) { if (!i)
                                            return 0; try {
                                            if (typeof i.size == "function")
                                                return i.size();
                                            if (typeof i.size == "number")
                                                return i.size;
                                            if (typeof i.length == "number")
                                                return i.length;
                                        }
                                        catch (c) { } return 0; } function $(i, c) { var h = String(i || ""), l = h.match(/[?&]page=(\d+)/i); if (l)
                                            return l[1]; var p = q(c || ""); return /^\d+$/.test(p), p; } function ve(i) { var c = i.select("ul.pagination li.active").first(); if (c) {
                                            var h = i.select("ul.pagination li.active + li:not(.disabled)").first();
                                            if (h) {
                                                var l = h.select("a").first();
                                                if (l)
                                                    return $(l.attr("href"), l.text());
                                            }
                                        } var p = i.select(".pagination li.active + li a, .pagination a[aria-label*='Trang sau'], .pagination a:contains('>')").first(); return p ? $(p.attr("href"), p.text()) : ""; } function ce(i, c, h) { i && i.forEach(function (l) { var p = l.attr("class") || ""; if (!(p.indexOf("work-detail-card") >= 0 || re(l.select(".work-chap-link")) > 0)) {
                                            var x = l.select("a.work-title, h3 a, a[title]").first(), m = x ? x.attr("title") || x.text() : "";
                                            if (m = q(m), !(!m || m.indexOf("Đọc từ đầu") >= 0 || m.indexOf("Mới nhất") >= 0)) {
                                                var v = x ? x.attr("href") : "";
                                                if (!v) {
                                                    var L = l.select("a[href]").first();
                                                    L && (v = L.attr("href"));
                                                }
                                                var C = O(v);
                                                if (!(!C || h[C])) {
                                                    h[C] = !0;
                                                    var M = l.select("img.work-thumb, img").first(), I = M ? M.attr("src") || M.attr("data-src") : "";
                                                    I && (I = O(I));
                                                    var R = l.select("a.work-tag--author, a[href*='/tac-gia/']").first(), K = R ? q(R.text()) : "", B = l.select(".work-summary, p.work-summary, p").first(), V = B ? q(B.text()) : "";
                                                    c.push({ name: m, link: C, cover: I, author: K, description: V, host: A });
                                                }
                                            }
                                        } }); } function W(i) {
                                            return __awaiter(this, void 0, void 0, function () { var c, h, l, p, x, m, v; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        i = O(i);
                                                        return [4, ue(i)];
                                                    case 1:
                                                        c = _a.sent();
                                                        if (!c.ok)
                                                            return [2, T.error("HTTP Error: " + c.status)];
                                                        h = c.text();
                                                        if (!h)
                                                            return [2, T.error("Trang trống")];
                                                        l = a.parse(h);
                                                        if (!l)
                                                            return [2, T.error("Không thể parse HTML")];
                                                        p = l.select(".chapter-reader-title, h1").first(), x = p ? q(p.text()) : "", m = l.select(".chapter-reader-content").first();
                                                        if (m || (m = l.select(".story-content").first()), m || (m = l.select("#workChapContent").first()), m || (m = l.select("article").first()), !m)
                                                            return [2, T.error("Không tìm thấy nội dung chương")];
                                                        m.select("script, style, iframe, .ads-class, .ads, .quang-cao, .chapter-nav").remove();
                                                        v = m.html();
                                                        return [2, v ? (v = v.replace(/<!DOCTYPE[^>]*>/gi, ""), v = v.replace(/<\/?(?:html|head|body)[^>]*>/gi, ""), v = v.replace(/[\u200B-\u200D\uFEFF]/g, ""), T.success(v, x)) : T.error("Nội dung chương trống")];
                                                }
                                            }); });
                                        } var A, D, T; return __generator(this, function (_a) {
                                            A = "https://truyendichai.top";
                                            try {
                                                j && (A = j);
                                            }
                                            catch (i) { }
                                            D = String(A || "").replace(/\/+$/, "");
                                            if (typeof T == "undefined")
                                                T = { success: function (i, c) { return JSON.stringify({ code: 0, data: i, data2: c }); }, error: function (i) { return JSON.stringify({ code: 1, data: i }); } };
                                            return [2, typeof W == "function" ? W : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, gen: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (u, r, a, n, s, o, f, d, g, k, y, w, N, U, Y, _, fe) {
                    return __awaiter(this, void 0, void 0, function () { var j; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                j = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function ue(i, c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, l; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c || (c = {});
                                                        h = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Referer: D + "/" };
                                                        if (c.headers)
                                                            for (l in c.headers)
                                                                h[l] = c.headers[l];
                                                        c.headers = h;
                                                        return [4, u(i, c)];
                                                    case 1: return [2, _a.sent()];
                                                }
                                            }); });
                                        } function O(i) { if (!i || (i = String(i).trim(), !i))
                                            return ""; if (i.indexOf("//") === 0 && (i = "https:" + i), i.indexOf("http://") === 0 || i.indexOf("https://") === 0) {
                                            if (/^https?:\/\/(?:i\.|cdn\.|img\.)/i.test(i) || /\.(?:jpg|jpeg|png|gif|webp)(?:\?.*)?$/i.test(i))
                                                return i;
                                            var c = i.replace(/^(?:https?:\/\/[^\/]+)/i, "");
                                            return D + (c.charAt(0) === "/" ? c : "/" + c);
                                        } return i.charAt(0) === "/" ? D + i : D + "/" + i; } function ye(i, c) { return i = O(i), c = String(c || "1"), c === "1" ? i : /[?&]page=\d+/i.test(i) ? i.replace(/([?&]page=)\d+/i, "$1" + c) : i + (i.indexOf("?") >= 0 ? "&" : "?") + "page=" + c; } function q(i) { return i ? String(i).replace(/\s+/g, " ").trim() : ""; } function re(i) { if (!i)
                                            return 0; try {
                                            if (typeof i.size == "function")
                                                return i.size();
                                            if (typeof i.size == "number")
                                                return i.size;
                                            if (typeof i.length == "number")
                                                return i.length;
                                        }
                                        catch (c) { } return 0; } function $(i, c) { var h = String(i || ""), l = h.match(/[?&]page=(\d+)/i); if (l)
                                            return l[1]; var p = q(c || ""); return /^\d+$/.test(p), p; } function ve(i) { var c = i.select("ul.pagination li.active").first(); if (c) {
                                            var h = i.select("ul.pagination li.active + li:not(.disabled)").first();
                                            if (h) {
                                                var l = h.select("a").first();
                                                if (l)
                                                    return $(l.attr("href"), l.text());
                                            }
                                        } var p = i.select(".pagination li.active + li a, .pagination a[aria-label*='Trang sau'], .pagination a:contains('>')").first(); return p ? $(p.attr("href"), p.text()) : ""; } function ce(i, c, h) { i && i.forEach(function (l) { var p = l.attr("class") || ""; if (!(p.indexOf("work-detail-card") >= 0 || re(l.select(".work-chap-link")) > 0)) {
                                            var x = l.select("a.work-title, h3 a, a[title]").first(), m = x ? x.attr("title") || x.text() : "";
                                            if (m = q(m), !(!m || m.indexOf("Đọc từ đầu") >= 0 || m.indexOf("Mới nhất") >= 0)) {
                                                var v = x ? x.attr("href") : "";
                                                if (!v) {
                                                    var L = l.select("a[href]").first();
                                                    L && (v = L.attr("href"));
                                                }
                                                var C = O(v);
                                                if (!(!C || h[C])) {
                                                    h[C] = !0;
                                                    var M = l.select("img.work-thumb, img").first(), I = M ? M.attr("src") || M.attr("data-src") : "";
                                                    I && (I = O(I));
                                                    var R = l.select("a.work-tag--author, a[href*='/tac-gia/']").first(), K = R ? q(R.text()) : "", B = l.select(".work-summary, p.work-summary, p").first(), V = B ? q(B.text()) : "";
                                                    c.push({ name: m, link: C, cover: I, author: K, description: V, host: A });
                                                }
                                            }
                                        } }); } function W(i, c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, l, p, x, m, v; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        typeof input != "undefined" && input && (Array.isArray(input) ? (i = input[0], c = input[1]) : typeof input == "string" && (i = input)), i = O(i), c = c || "1", i = ye(i, c);
                                                        return [4, ue(i)];
                                                    case 1:
                                                        h = _a.sent();
                                                        if (!h.ok)
                                                            return [2, T.error("HTTP Error: " + h.status)];
                                                        l = h.text();
                                                        if (!l)
                                                            return [2, T.error("Trang trống")];
                                                        p = a.parse(l);
                                                        if (!p)
                                                            return [2, T.error("Không thể parse HTML")];
                                                        x = [], m = {};
                                                        ce(p.select(".single-trending-work"), x, m), ce(p.select(".work-card"), x, m);
                                                        v = ve(p);
                                                        return [2, T.success(x, v)];
                                                }
                                            }); });
                                        } var A, D, T; return __generator(this, function (_a) {
                                            A = "https://truyendichai.top";
                                            try {
                                                j && (A = j);
                                            }
                                            catch (i) { }
                                            D = String(A || "").replace(/\/+$/, "");
                                            if (typeof T == "undefined")
                                                T = { success: function (i, c) { return JSON.stringify({ code: 0, data: i, data2: c }); }, error: function (i) { return JSON.stringify({ code: 1, data: i }); } };
                                            return [2, typeof W == "function" ? W : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    } };
function n0(t) { return new $t({ meta: xe, scripts: i0, host: t }); }
var Ha = require("@libs/fetch").fetchApi, dt = null;
try {
    dt = require("@libs/storage");
}
catch (t) {
    dt = null;
}
var zu = {}, Wt = dt && dt.storage ? dt.storage : { get: function (t) { return zu[t]; }, set: function (t, e) { zu[t] = e; }, delete: function (t) { delete zu[t]; } }, $u = (function () {
    function class_2() {
        var _this = this;
        this.id = xe.lnId, this.name = xe.name, this.icon = xe.lnIcon, this.site = xe.source, this.version = xe.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = n0({ name: "LNReader", request: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var u, r, a;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            u = { method: e.method, headers: e.headers };
                            e.body != null && e.method !== "GET" && (u.body = e.body);
                            return [4, Ha(e.url, u)];
                        case 1:
                            r = _b.sent(), a = {};
                            try {
                                r.headers.forEach(function (n, s) { a[s] = n; });
                            }
                            catch (n) { }
                            _a = { status: r.status, url: r.url || e.url, headers: a };
                            return [4, r.text()];
                        case 2: return [2, (_a.text = _b.sent(), _a)];
                    }
                });
            }); }, storageGet: function (e) { var u = Wt.get("vb_" + e); return u == null ? null : String(u); }, storageSet: function (e, u) { u == null ? Wt.delete && Wt.delete("vb_" + e) : Wt.set("vb_" + e, String(u)); }, config: function (e) { return null; }, log: function (e) { return console.log(e); } });
    }
    class_2.prototype.popularNovels = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(u && u.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(e)];
                case 1:
                    _a = _b.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(e)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4: return [2, (_a).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(e, u)];
                case 1: return [2, (_a.sent()).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.detail(e)];
                case 1:
                    u = _a.sent();
                    return [4, this.engine.chapters(e)];
                case 2:
                    r = _a.sent();
                    return [2, { path: e, name: u.name || "Untitled", cover: u.cover, summary: u.description, author: u.author, status: u.ongoing ? "Ongoing" : "Completed", genres: u.genres.join(","), chapters: r.map(function (a, n) { return ({ name: a.name, path: a.url, chapterNumber: n + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.content(e)];
                case 1: return [2, (_a.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (e, u) { return /^https?:/i.test(e) ? e : xe.source.replace(/\/+$/, "") + "/" + String(e).replace(/^\/+/, ""); };
    return class_2;
}()), Fa = new $u;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
